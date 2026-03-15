import React from "react";
import "./Explore.css";
// import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { FaBookReader, FaQuestionCircle, FaUsers, FaBriefcase } from "react-icons/fa";

const content = {
  en: {
    heading: "🔍 Explore Knowledge",
    sections: [
      {
        title: "Extra Reading Material",
        // desc: "Extra Reading Material",
        icon: <FaBookReader />,
        link: "https://www.maa.ac.in/index.php?tcf=avantar_vachnachi_pustke",
        class: "orbit1",
      },
      {
        title: "Question Bank",
        // desc: "Question Bank",
        icon: <FaQuestionCircle />,
        link: "https://www.maa.ac.in/index.php?tcf=questionbank",
        class: "orbit2",
      },
      {
        title: "Experts' Guidance",
        // desc: "Experts' Guidance",
        icon: <FaUsers />,
        link: "https://www.youtube.com/playlist?list=PLFJ76Y6VBMZqhjz1EF7HAJtklknIPrsBN",
        class: "orbit3",
      },
      {
        title: "Career Guidance",
        // desc: "Future Career Paths",
        icon: <FaBriefcase />,
        link: "https://www.youtube.com/playlist?list=PLFJ76Y6VBMZocRKItHYwXoJR2ABThJLhH",
        class: "orbit4",
      },
    ],
  },

  mr: {
    heading: "🔍 ज्ञानाचा शोध",
    sections: [
      {
        title: "अवांतर वाचन",
        desc: "अतिरिक्त वाचन साहित्य",
        icon: <FaBookReader />,
        link: "https://www.maa.ac.in/index.php?tcf=avantar_vachnachi_pustke",
        class: "orbit1",
      },
      {
        title: "प्रश्नसंच",
        desc: "सराव प्रश्नसंच",
        icon: <FaQuestionCircle />,
        link: "https://www.maa.ac.in/index.php?tcf=questionbank",
        class: "orbit2",
      },
      {
        title: "चर्चा प्रज्ञावंतांशी",
        desc: "तज्ञांचे मार्गदर्शन",
        icon: <FaUsers />,
        link: "https://www.youtube.com/playlist?list=PLFJ76Y6VBMZqhjz1EF7HAJtklknIPrsBN",
        class: "orbit3",
      },
      {
        title: "करिअर मार्गदर्शन",
        desc: "भविष्यासाठी दिशा",
        icon: <FaBriefcase />,
        link: "https://www.youtube.com/playlist?list=PLFJ76Y6VBMZocRKItHYwXoJR2ABThJLhH",
        class: "orbit4",
      },
    ],
  },
};

const Explore = ({ language = "en" }) => {
  
//   const navigate = useNavigate();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const data = content[language];

  return (
    <div className="explore-container">

      <h2 className="explore-heading">{data.heading}</h2>

      <div className="explore-hub">

        <div className="hub-center">
          <span>Explore</span>
        </div>

        {data.sections.map((sec, index) => (
        <div
            key={index}
            className={`orbit-item ${sec.class}`}
            onClick={() => window.open(sec.link, "_blank")}
        >
            <div className="orbit-icon">{sec.icon}</div>
            <h3>{sec.title}</h3>
            {/* <p>{sec.desc}</p> */}
        </div>
        ))}

      </div>

    </div>
  );
};

export default Explore;