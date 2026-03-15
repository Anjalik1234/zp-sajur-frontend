import React from "react";
import "./5th.css";
import { useEffect } from "react";

import { FaBookOpen } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import { GiTreeBranch } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";

const content = {
  en: {
    heading: "📘 5th Standard Subjects",
    subjects: [
      {
        name: "Marathi",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1S5d5nprksaVA8Jku_5iM0hjIFGP0KPkY",
      },
      {
        name: "English",
        icon: <FaLanguage />,
        link: "https://drive.google.com/drive/folders/1tE8YRNIiedov0-kU6He6m_Ds284n8ZMl",
      },
      {
        name: "Mathematics",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1XM3eP-va1TApG6PW0cZCjn2i1k1gDyhY",
      },
      {
        name: "Hindi",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1adN0p2DkK3aXG6pB2Z6wuzyLYeTfZksM",
      },
      {
        name: "Environmental Studies",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/14e5PMxyuj79XLGg_jWx49aHKuSkWQmeN",
      },
    ],
  },

  mr: {
    heading: "📘 इयत्ता ५ वी विषय",
    subjects: [
      {
        name: "मराठी",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1S5d5nprksaVA8Jku_5iM0hjIFGP0KPkY",
      },
      {
        name: "इंग्रजी",
        icon: <FaLanguage />,
        link: "https://drive.google.com/drive/folders/1tE8YRNIiedov0-kU6He6m_Ds284n8ZMl",
      },
      {
        name: "गणित",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1XM3eP-va1TApG6PW0cZCjn2i1k1gDyhY",
      },
      {
        name: "हिंदी",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1adN0p2DkK3aXG6pB2Z6wuzyLYeTfZksM",
      },
      {
        name: "परिसर अभ्यास",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/14e5PMxyuj79XLGg_jWx49aHKuSkWQmeN",
      },
    ],
  },
};

const Fifth = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const selected = content[language];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="standard-section-5">

      <h2 className="standard-title-5">{selected.heading}</h2>

      <div className="subjects-container-5">

        {selected.subjects.map((subject, index) => (
          <div
            key={index}
            className={`subject-card-5 subject5-${index}`}
            onClick={() => handleClick(subject.link)}
          >
            <div className="subject-content-5">
              <div className="subject-icon-5">{subject.icon}</div>
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Fifth;