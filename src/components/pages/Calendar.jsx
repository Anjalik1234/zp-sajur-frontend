import { useState, useEffect } from "react";
import "./Calendar.css";

import { getSunTimes } from "../../utils/sunUtils";
import thoughts from "../../data/thoughts.json";

import holidays2026 from "../../data/holidays2026.json";
import holidays2027 from "../../data/holidays2027.json";
import holidays2028 from "../../data/holidays2028.json";

/* Helper: English digits → Marathi digits */
const toMarathiNumber = (value) => {
  const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return value.toString().replace(/[0-9]/g, (d) => marathiDigits[d]);
};

export default function Calendar({ language = "mr" }) {
  const lang = language;

  const today = new Date();
  const { sunrise, sunset } = getSunTimes(today);

  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const todayYear = today.getFullYear();

  const [currentMonth, setCurrentMonth] = useState(todayMonth - 1);
  const [currentYear, setCurrentYear] = useState(todayYear);

  const [birthdays, setBirthdays] = useState([]);

  // ✅ Map holidays by year
  const holidayDataByYear = {
    2026: holidays2026,
    2027: holidays2027,
    2028: holidays2028
  };

  const specialDays = holidayDataByYear[currentYear] || [];

  // ✅ Fetch Birthdays (still from backend)
  useEffect(() => {
    const fetchBirthdays = async () => {
      try {
        const res = await fetch("https://zpsajur-backend.onrender.com/api/students/today-birthday");
        const data = await res.json();
        setBirthdays(data);
      } catch (err) {
        console.error("Error fetching birthdays:", err);
      }
    };

    fetchBirthdays();

    const interval = setInterval(fetchBirthdays, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  // ✅ Thought logic
  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const dayIndex = getDayOfYear(today) % thoughts.length;
  const todayThought = thoughts[dayIndex];

  const todaysEvents = specialDays.filter(
    (d) => d.month === todayMonth && d.day === todayDate
  );

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendar = [];
  for (let i = 0; i < firstDay; i++) calendar.push(null);
  for (let d = 1; d <= totalDays; d++) calendar.push(d);

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <section className="calendar-section" id="calendar">
      <div className="calendar-compact-wrapper">

        <h2 className="mini-title">
          {lang === "mr" ? "शालेय कॅलेंडर" : "School Calendar"}
        </h2>

        <div className="calendar-main-grid">

          {/* LEFT PANEL */}
          <div className="mini-panel side">

            <h4>{lang === "mr" ? "आजचे पंचांग" : "Panchang"}</h4>

            <div className="panchang-row">
              <span className="surya">
                🌅 {lang === "mr" ? "सूर्योदय" : "Sunrise"} :
                {lang === "mr" ? toMarathiNumber(sunrise) : sunrise}
              </span>

              <span className="surya">
                🌇 {lang === "mr" ? "सूर्यास्त" : "Sunset"} :
                {lang === "mr" ? toMarathiNumber(sunset) : sunset}
              </span>
            </div>

            <div className="mini-quote">
              <h4>{lang === "mr" ? "सुविचार" : "Thought"}</h4>
              <p>
                "{lang === "mr" ? todayThought.mr : todayThought.en}"
              </p>
            </div>

            <div className="mini-dinvishesh">
              <h4>{lang === "mr" ? "दिनविशेष" : "Today's Special"}</h4>

              {todaysEvents.length === 0 ? (
                <p className="neutral-text">
                  {lang === "mr"
                    ? "आज कोणताही विशेष दिवस नाही"
                    : "No special occasion today"}
                </p>
              ) : (
                todaysEvents.map((e, i) => (
                  <p key={i} className="din-item">
                    🎉 {lang === "mr" ? e.mr : e.en}
                  </p>
                ))
              )}
            </div>

          </div>

          {/* CENTER CALENDAR */}
          <div className="mini-panel chalkboard-compact">

            <div className="cal-top">
              <button onClick={goPrevMonth} className="nav-btn">◀</button>

              <strong>
                {new Date(currentYear, currentMonth).toLocaleString(
                  lang === "mr" ? "mr-IN" : "en-IN",
                  { month: "long", year: "numeric" }
                )}
              </strong>

              <button onClick={goNextMonth} className="nav-btn">▶</button>
            </div>

            <div className="mini-weekdays">
              {(lang === "mr"
                ? ["र", "सो", "मं", "बु", "गु", "शु", "श"]
                : ["S", "M", "T", "W", "T", "F", "S"]
              ).map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>

            <div className="mini-grid">
              {calendar.map((d, i) => {
                if (!d) return <div key={i} className="mini-cell empty" />;

                const isToday =
                  d === todayDate &&
                  currentMonth === todayMonth - 1 &&
                  currentYear === todayYear;

                const holiday = specialDays.find(
                  (h) =>
                    h.month === currentMonth + 1 &&
                    h.day === d
                );

                return (
                  <div
                    key={i}
                    className={`mini-cell 
                      ${isToday ? "active" : ""} 
                      ${holiday ? "event holiday-cell" : ""}
                    `}
                  >
                    {lang === "mr" ? toMarathiNumber(d) : d}

                    {holiday && (
                      <div className="holiday-tooltip">
                        {lang === "mr" ? holiday.mr : holiday.en}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="mini-panel side">
            <div className="bday-container">
              {birthdays.length === 0 ? (
                <div className="mini-bday-card flower-card">

                  {/* Heading like Happy Birthday */}
                  <span className="birthday-text">
                    🎂 {lang === "mr" ? "वाढदिवस" : "Birthdays"}
                  </span>

                  <p className="small-text">
                    {lang === "mr"
                      ? "आज कोणाचाही वाढदिवस नाही"
                      : "No birthdays today"}
                  </p>

                </div>
              ) : (
                birthdays.map((b, i) => (
                  <div key={i} className="mini-bday-card flower-card">

                    {/* Top-right flower */}
                    <span className="birthday-text">🎂 {lang === "mr" ? "वाढदिवसाच्या हार्दिक शुभेच्छा !!" : "Happy Birthday !!"}</span>
                    <img
                      src="/bday-flower.png"
                      alt="flower decoration"
                      className="flower-img top-right"
                    />

                    <div className="bday-content">
                      <img
                        src={b.img || "/default-student.png"}
                        alt={b.name}
                        onError={(e) => {
                          e.target.src = "/default-student.png";
                        }}
                      />

                      <h6>{b.name}</h6>

                      <small>
                        {lang === "mr"
                          ? `इयत्ता : ${toMarathiNumber(b.std)}`
                          : `Std: ${b.std}`}
                      </small>
                    </div>

                    {/* Bottom-left flower */}
                    <img
                      src="/bday-flower.png"
                      alt="flower decoration"
                      className="flower-img bottom-left"
                    />

                  </div>
                ))
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
