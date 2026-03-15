import React from "react";
import "./6th.css";
import { useEffect } from "react";

import { FaBook, FaGlobeAsia, FaBookOpen } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { BiMath } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";

const content = {
  en: {
    heading: "📘 6th Standard Subjects",
    subjects: [
      { name: "Marathi", icon: <GiBookshelf />, className: "marathi", link: "https://drive.google.com/drive/folders/1lV0CpVq_a_e70frqHYSogkFda_XPLVDM" },
      { name: "English", icon: <BsTranslate />, className: "english", link: "https://drive.google.com/drive/folders/13mXh_e6T0oUyQ5RGXWSc3dATaR_g8H5v" },
      { name: "Hindi", icon: <FaBookOpen />, className: "hindi", link: "https://drive.google.com/drive/folders/13dOzpvQQS8u09sdB1souQ9k1_fsFJjdn" },
      { name: "Mathematics", icon: <BiMath />, className: "maths", link: "https://drive.google.com/drive/folders/1ez5aAfMSxd7_PPGN71SqmChysmP5IKUd" },
      { name: "Science", icon: <MdScience />, className: "science", link: "https://drive.google.com/drive/folders/135xdBn8sjuNG0ywoQu82lrmoVziiUBK5" },
      { name: "History", icon: <FaBook />, className: "history", link: "https://drive.google.com/drive/folders/1yaQp9RBWcgvpmPgzFRhO2qt3HHjcbHrD" },
      { name: "Geography", icon: <FaGlobeAsia />, className: "geography", link: "https://drive.google.com/drive/folders/1Q9fN-ClEbfmvtopPnBjcHfCDC_ULuH-P" }
    ]
  },

  mr: {
    heading: "📘 इयत्ता ६ वी विषय",
    subjects: [
      { name: "मराठी", icon: <GiBookshelf />, className: "marathi", link: "https://drive.google.com/drive/folders/1lV0CpVq_a_e70frqHYSogkFda_XPLVDM" },
      { name: "इंग्रजी", icon: <BsTranslate />, className: "english", link: "https://drive.google.com/drive/folders/13mXh_e6T0oUyQ5RGXWSc3dATaR_g8H5v" },
      { name: "हिंदी", icon: <FaBookOpen />, className: "hindi", link: "https://drive.google.com/drive/folders/13dOzpvQQS8u09sdB1souQ9k1_fsFJjdn" },
      { name: "गणित", icon: <BiMath />, className: "maths", link: "https://drive.google.com/drive/folders/1ez5aAfMSxd7_PPGN71SqmChysmP5IKUd" },
      { name: "सामान्य विज्ञान", icon: <MdScience />, className: "science", link: "https://drive.google.com/drive/folders/135xdBn8sjuNG0ywoQu82lrmoVziiUBK5" },
      { name: "इतिहास", icon: <FaBook />, className: "history", link: "https://drive.google.com/drive/folders/1yaQp9RBWcgvpmPgzFRhO2qt3HHjcbHrD" },
      { name: "भूगोल", icon: <FaGlobeAsia />, className: "geography", link: "https://drive.google.com/drive/folders/1Q9fN-ClEbfmvtopPnBjcHfCDC_ULuH-P" }
    ]
  }
};

const Sixth = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const data = content[language];

  return (
    <section className="sixth-section">

      <h2 className="sixth-title">{data.heading}</h2>

      {/* BOARD */}
      <div className="subjects-board">

        <div className="subjects-grid">

          {data.subjects.map((sub, index) => (
            <a
              key={index}
              href={sub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`subject-card ${sub.className}`}
            >
              <div className="icon">{sub.icon}</div>
              <h3>{sub.name}</h3>
            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Sixth;


