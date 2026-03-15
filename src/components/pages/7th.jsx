import React from "react";
import "./7th.css";
import { useEffect } from "react";

import { FaBook, FaGlobeAsia, FaBookOpen } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { BiMath } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";

const content = {
  en: {
    heading: "📘 7th Standard Subjects",
    subjects: [
      { name: "Marathi", icon: <GiBookshelf />, className: "marathi", link: "https://drive.google.com/drive/folders/1zD4zn-TvsetthReMw_wCJ41krM7SJMl3" },
      { name: "English", icon: <BsTranslate />, className: "english", link: "https://drive.google.com/drive/folders/1BCdJnHC7Debo8xTUWh2XLgPmZlX1CZIq" },
      { name: "Hindi", icon: <FaBookOpen />, className: "hindi", link: "https://drive.google.com/drive/folders/1NW26bAiNuEAgV0w1IYZEBvQJWFd8mPIb" },
      { name: "Mathematics", icon: <BiMath />, className: "maths", link: "https://drive.google.com/drive/folders/1Ps1E4xBMrvzLTRCmTasy5MMOA2UqGx04" },
      { name: "Science", icon: <MdScience />, className: "science", link: "https://drive.google.com/drive/folders/1_4c0VRvgdw6rL8vF03Ca5F2U4kCXbnDD" },
      { name: "History", icon: <FaBook />, className: "history", link: "https://drive.google.com/drive/folders/1DUwDtMIyVUQQcMmMHQrsoVkMcda-1yGA" },
      { name: "Geography", icon: <FaGlobeAsia />, className: "geography", link: "https://drive.google.com/drive/folders/1uEQk7oybUJngGv8Eu5WUJvwuifgtY0BR" }
    ]
  },

  mr: {
    heading: "📘 इयत्ता ७ वी विषय",
    subjects: [
      { name: "मराठी", icon: <GiBookshelf />, className: "marathi", link: "https://drive.google.com/drive/folders/1zD4zn-TvsetthReMw_wCJ41krM7SJMl3" },
      { name: "इंग्रजी", icon: <BsTranslate />, className: "english", link: "https://drive.google.com/drive/folders/1BCdJnHC7Debo8xTUWh2XLgPmZlX1CZIq" },
      { name: "हिंदी", icon: <FaBookOpen />, className: "hindi", link: "https://drive.google.com/drive/folders/1NW26bAiNuEAgV0w1IYZEBvQJWFd8mPIb" },
      { name: "गणित", icon: <BiMath />, className: "maths", link: "https://drive.google.com/drive/folders/1Ps1E4xBMrvzLTRCmTasy5MMOA2UqGx04" },
      { name: "सामान्य विज्ञान", icon: <MdScience />, className: "science", link: "https://drive.google.com/drive/folders/1_4c0VRvgdw6rL8vF03Ca5F2U4kCXbnDD" },
      { name: "इतिहास", icon: <FaBook />, className: "history", link: "https://drive.google.com/drive/folders/1DUwDtMIyVUQQcMmMHQrsoVkMcda-1yGA" },
      { name: "भूगोल", icon: <FaGlobeAsia />, className: "geography", link: "https://drive.google.com/drive/folders/1uEQk7oybUJngGv8Eu5WUJvwuifgtY0BR" }
    ]
  }
};

const Seventh = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const data = content[language];

  return (
    <section className="seventh-section">

      <h2 className="seventh-title">{data.heading}</h2>

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

export default Seventh;