import React from "react";
import "./2nd.css";
import { useEffect } from "react";

import { FaBookOpen } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";

const content = {
  en: {
    heading: "📘 2nd Standard Subjects",
    subjects: [
      {
        name: "Marathi",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1_l0I0WJODIw1g9Xq3h-s9_010eaN1UFu",
      },
      {
        name: "English",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1y1mebMQW_652_pV38tihMuhowVtJqqCI",
      },
      {
        name: "Mathematics",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1uyWWuIttsl8ftTDaWU4-gHx93eWElDqQ",
      },
    ],
  },
  mr: {
    heading: "📘 इयत्ता २ री विषय",
    subjects: [
      {
        name: "मराठी",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1_l0I0WJODIw1g9Xq3h-s9_010eaN1UFu",
      },
      {
        name: "इंग्रजी",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1y1mebMQW_652_pV38tihMuhowVtJqqCI",
      },
      {
        name: "गणित",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1uyWWuIttsl8ftTDaWU4-gHx93eWElDqQ",
      },
    ],
  },
};

const Second = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const selected = content[language];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="standard-section">
      <h2 className="standard-title">{selected.heading}</h2>

      <div className="subjects-container">
        {selected.subjects.map((subject, index) => (
          <div
            key={index}
            className={`subject-card subject-${index}`}
            onClick={() => handleClick(subject.link)}
          >
            <div className="subject-content">
              <div className="subject-icon">{subject.icon}</div>
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Second;