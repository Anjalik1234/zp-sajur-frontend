import React from "react";
import "./4th.css";
import { useEffect } from "react";

import { FaBookOpen } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import { GiTreeBranch } from "react-icons/gi";

const content = {
  en: {
    heading: "📘 4th Standard Subjects",
    subjects: [
      {
        name: "Marathi",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1MShW7XkGL3QXkirdmnCRHkrqRuqOTCh7",
      },
      {
        name: "English",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1B-lo2gkTs7ipK-ejhmI6WkyR4-Hp3jN3",
      },
      {
        name: "Mathematics",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1UEBN075WaH09WjO7MRAY_Pv7LKxfjsNL",
      },
      {
        name: "Environmental Studies",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/15cN39RD87lQF4tHcuNQgEDbKHNMhkIGe",
      },
    ],
  },

  mr: {
    heading: "📘 इयत्ता ४ थी विषय",
    subjects: [
      {
        name: "मराठी",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1MShW7XkGL3QXkirdmnCRHkrqRuqOTCh7",
      },
      {
        name: "इंग्रजी",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/1B-lo2gkTs7ipK-ejhmI6WkyR4-Hp3jN3",
      },
      {
        name: "गणित",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1UEBN075WaH09WjO7MRAY_Pv7LKxfjsNL",
      },
      {
        name: "परिसर अभ्यास",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/15cN39RD87lQF4tHcuNQgEDbKHNMhkIGe",
      },
    ],
  },
};

const Fourth = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const selected = content[language];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="fourth-page">

      <h2 className="fourth-heading">{selected.heading}</h2>

      {/* BLACKBOARD */}
      <div className="subjects-board">

        <div className="fourth-grid">

          {selected.subjects.map((subject, index) => (
            <div
              key={index}
              className={`fourth-tile tile-${index}`}
              onClick={() => openLink(subject.link)}
            >
              <div className="tile-icon">{subject.icon}</div>
              <h3>{subject.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Fourth;