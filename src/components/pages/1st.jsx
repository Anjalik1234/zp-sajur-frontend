import React from "react";
import { useEffect } from "react";
import "./1st.css";

import { FaBookOpen } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";

const content = {
  en: {
    heading: "📘 1st Standard Subjects",
    subjects: [
      {
        name: "Marathi",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1Tj7I4rv9j8PLx7bOgtV_8hUGlFpmIm-C",
      },
      {
        name: "English",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/18g1DzGb47P_eqn_qpnyHelmbiD78ni2c",
      },
      {
        name: "Mathematics",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1Z3yhG6TweJWAUMRY6uqfSkuCqy4z_mjn",
      },
    ],
  },
  mr: {
    heading: "📘 इयत्ता १ ली विषय",
    subjects: [
      {
        name: "मराठी",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1Tj7I4rv9j8PLx7bOgtV_8hUGlFpmIm-C",
      },
      {
        name: "इंग्रजी",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/18g1DzGb47P_eqn_qpnyHelmbiD78ni2c",
      },
      {
        name: "गणित",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1Z3yhG6TweJWAUMRY6uqfSkuCqy4z_mjn",
      },
    ],
  },
};

const First = ({ language = "mr" }) => {
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

export default First;