import React from "react";
import { useNavigate } from "react-router-dom";
import "./LST.css";
import bookImg from "../../assets/images/LST/book.png";
import study from "../../assets/images/LST/study.png";
import science from "../../assets/images/LST/science.png";
import butter1 from "../../assets/images/LST/butterflies.png";

const content = {
  en: {
    heading: "Let’s Study 📖",
    desc: (
      <>
        Explore learning resources for students from
        <strong> 1st to 7th Standard</strong>.
        Click on a book to start learning!
      </>
    ),
    standards: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"],
  },
  mr: {
    heading: "चला अभ्यास करूया 📖",
    desc: (
      <>
        १ ली ते ७ वी पर्यंतच्या विद्यार्थ्यांसाठी
        <strong> शैक्षणिक साहित्य येथे उपलब्ध आहे.</strong>
        शिकायला सुरुवात करण्यासाठी पुस्तकावर क्लिक करा!
      </>
    ),
    standards: ["१ली", "२री", "३री", "४थी", "५वी", "६वी", "७वी"],
  },
};

const LST = ({ language = "mr" }) => {
  const selected = content[language];
  const navigate = useNavigate();

  const handleNavigation = (std) => {
    const routes = {
      1: "/first",
      2: "/second",
      3: "/third",
      4: "/fourth",
      5: "/fifth",
      6: "/sixth",
      7: "/seventh",
    };

    navigate(routes[std]);
  };

  return (
    <section id="study" className="lst-section">
      <div className="lst-layout">

        {/* LEFT CARD (UNCHANGED) */}
        <div className="lst-card-wrapper">
          <img src={study} alt="Study" className="lst-card-img" />
          <img src={butter1} alt="Science" className="lst-card-butter1-img" />
          <img src={science} alt="Science" className="lst-card-sci-img" />

          <div className="lst-card">
            <h3>{selected.heading}</h3>
            <p>{selected.desc}</p>
          </div>
        </div>

        {/* RIGHT BOOK SECTION */}
        <div className="books-container">

          <button
            className="extra-study-btn"
            onClick={() => navigate("/explore")}
          >
            {language === "mr" ? "अधिक जाणून घ्या" : "Explore More"}
          </button>

          <div className="books-row">
            {selected.standards.slice(0,3).map((std, index) => (
              <div
                key={index}
                className="book"
                onClick={() => handleNavigation(index + 1)}
              >
                <img src={bookImg} alt={std} />
                <span>{std}{language === "mr" ? "" : ""}</span>
              </div>
            ))}
          </div>

          <div className="books-row">
            {selected.standards.slice(3,7).map((std, index) => (
              <div
                key={index}
                className="book"
                onClick={() => handleNavigation(index + 4)}
              >
                <img src={bookImg} alt={std} />
                <span>{std}{language === "mr" ? "" : ""}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LST;