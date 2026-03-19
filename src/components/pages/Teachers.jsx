import React from "react";

import { useEffect, useState } from "react";
import "./Teachers.css";

const Teachers = ({ language = "mr" }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {

    const fetchTeachers = async () => {

      try {

        const response = await fetch("https://zpsajur-backend.onrender.com/api/teachers");

        const data = await response.json();

        setTeachers(Array.isArray(data) ? data : data.teachers || []);

      } catch (error) {

        console.log("Error fetching teachers:", error);

      }

    };

    fetchTeachers();

  }, []);

  const specialMembers = teachers?.filter(
    (t) => t.category === "special"
  ) || [];

  const normalTeachers = teachers?.filter(
    (t) => t.category === "teacher"
  ) || [];

  return (
    <section className="teachers-section" id="teachers">

      {/* 🔹 Special Members Section */}
      <div className="special-members">
        {specialMembers.map((member, index) => (
          <div className="teacher-card special-card" key={index}>
            <div className="image-wrapper special-image">
              <img src={member.photo} alt={member.name[language]} />
            </div>

            <div className="teacher-info">
              <h3>{member.name[language]}</h3>
              <span className="position">
                {member.position[language]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="teachers-title">
        👩‍🏫 {language === "mr" ? "आमचे शिक्षक" : "Our Teachers"}
      </h2>

      <p className="teachers-subtitle">
        {language === "mr"
          ? "विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी समर्पित मार्गदर्शक"
          : "Dedicated mentors shaping students’ bright future"}
      </p>

      {/* 🔹 Teachers Section */}
      <div className="teachers-container">
        {normalTeachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <div className="image-wrapper">
              <img src={teacher.photo} alt={teacher.name[language]} />
            </div>

            <div className="teacher-info">
              <h3>{teacher.name[language]}</h3>
              <span className="position">
                {teacher.position[language]}
              </span>

              <div className="details">
                <p>
                  <strong>
                    {language === "mr" ? "शिक्षण" : "Education"}:
                  </strong>{" "}
                  {teacher.education}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;