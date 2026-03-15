import React from "react";
import "./3rd.css";
import { useEffect } from "react";

import { FaBookOpen } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import { GiTreeBranch } from "react-icons/gi";

const content = {
  en: {
    heading: "📘 3rd Standard Subjects",
    subjects: [
      {
        name: "Marathi",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1TGl8ilFSeapOa5TaGstkRBVZCpz_ziW_",
      },
      {
        name: "English",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/15i8yp0V3Lh5Clko-yrTIuQ84WFfTVHP6YOUR_LINK_HERE",
      },
      {
        name: "Mathematics",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1h4Lbo40WIgObkYyy9iXAN6l_DoyPAp4q",
      },
      {
        name: "Environmental Studies",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/1Oy-dVSr_msYDpr5biinW60Pm9ICgFxV2",
      },
    ],
  },

  mr: {
    heading: "📘 इयत्ता ३ री विषय",
    subjects: [
      {
        name: "मराठी",
        icon: <MdTranslate />,
        link: "https://drive.google.com/drive/folders/1TGl8ilFSeapOa5TaGstkRBVZCpz_ziW_",
      },
      {
        name: "इंग्रजी",
        icon: <FaBookOpen />,
        link: "https://drive.google.com/drive/folders/15i8yp0V3Lh5Clko-yrTIuQ84WFfTVHP6",
      },
      {
        name: "गणित",
        icon: <TbMath />,
        link: "https://drive.google.com/drive/folders/1h4Lbo40WIgObkYyy9iXAN6l_DoyPAp4q",
      },
      {
        name: "परिसर अभ्यास",
        icon: <GiTreeBranch />,
        link: "https://drive.google.com/drive/folders/1Oy-dVSr_msYDpr5biinW60Pm9ICgFxV2",
      },
    ],
  },
};

const Third = ({ language = "mr" }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const selected = content[language];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="standard-section-3">
      <h2 className="standard-title-3">{selected.heading}</h2>

      <div className="subjects-container-3">
        {selected.subjects.map((subject, index) => (
          <div
            key={index}
            className={`subject-card-3 subject3-${index}`}
            onClick={() => handleClick(subject.link)}
          >
            <div className="subject-content-3">
              <div className="subject-icon-3">{subject.icon}</div>
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Third;