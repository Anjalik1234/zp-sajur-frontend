import React from "react";
import { useNavigate } from "react-router-dom";

import "./Gallery.css";
import { FaYoutube, FaPaintBrush, FaTheaterMasks, FaLeaf, FaStar, FaSchool, FaChalkboardTeacher, FaTree
 } from "react-icons/fa";
import schoolImg from "../../assets/images/Gallery/new_school.png"; // adjust path if needed
import activityImg from "../../assets/images/Gallery/play-2.png"; // adjust path




const galleryData = [
  {
    id: "infra",
    badge: "🏫",
    title: { mr: "सुविधा", en: "Infrastructure" },
    description: {
      mr: "प्रत्येक मुलासाठी सुरक्षित वर्गखोली, खेळाचे मैदान आणि शिक्षणाची जागा.",
      en: "Safe classrooms, playgrounds and learning spaces for every child.",
    },
    button: { mr: "फोटो पहा", en: "View Photos" },
  },
  {
    id: "youtube",
    link: "https://www.youtube.com/@z.p.schoolsajursajur6345",
    badge: <FaYoutube size={40} color="#fff" />,
    title: { mr: "YouTube गॅलरी", en: "YouTube Gallery" },
    description: {
      mr: "शाळेचे कार्यक्रम, समारंभ आणि विद्यार्थी प्रदर्शन पाहा.",
      en: "Watch school programs, celebrations and student performances.",
    },
    button: { mr: "व्हिडिओ पहा", en: "Watch Videos" },
  },
  {
    id: "activities",
    badge: "🎨",
    title: { mr: "कार्यानुभव", en: "Activities" },
    description: {
      mr: "क्रीडा, कला, सांस्कृतिक कार्यक्रम आणि आनंदी शिक्षणाचे क्षण.",
      en: "Sports, arts, cultural events and joyful learning moments.",
    },
    button: { mr: "मजा एक्सप्लोर करा", en: "Explore Fun" },
  },
];

const Gallery = ({ language = "mr" }) => {
  const navigate = useNavigate();
  return (
    <section className="joy-gallery" id="gallery">
      <h2 className="joy-title">
        {language === "mr" ? "आमची गॅलरी" : "Our Gallery"}
      </h2>
      <p className="joy-subtitle">
        {language === "mr"
          ? "शिकणे, खेळणे आणि एकत्र वाढणे"
          : "Learning, Playing & Growing Together"}
      </p>

      <div className="joy-row">
        {galleryData.map((item) => (
          <div className={`joy-card ${item.id}`} key={item.id}>
            {/* 🌟 TOP emerging image for Infrastructure */}
            {item.id === "infra" && (
              <img
                src={schoolImg}
                alt="School"
                className="infra-top-img"
              />
            )}
            {/* 🌟 TOP emerging image for Activities */}
            {item.id === "activities" && (
              <img
                src={activityImg}
                alt="Activities"
                className="activities-top-img"
              />
            )}
            <div className="joy-badge">{item.badge}</div>
            <h3>{item.title[language]}</h3>
            <p>{item.description[language]}</p>
            <button
              onClick={() => {
                if (item.id === "youtube") {
                  window.open("https://www.youtube.com/@z.p.schoolsajursajur6345", "_blank");
                }

                if (item.id === "activities") {
                  navigate("/activities");
                }

                if(item.id === "infra") {
                  navigate("/infra");
                }
              }}
            >
              {item.button[language]}
            </button>


            {/* LEFT emerging icons for Infrastructure */}
            {item.id === "infra" && (
              <div className="infra-emerge">
                <FaSchool className="infra-icon school" />
                <FaChalkboardTeacher className="infra-icon board" />
                <FaTree className="infra-icon tree" />
              </div>
            )}

            {/* Emerging Icons ONLY for Activities */}
            {item.id === "activities" && (
              <div className="activity-emerge">
                <FaPaintBrush className="emerge-icon brush" />
                <FaLeaf className="emerge-icon leaf" />
                <FaStar className="emerge-icon star" />
                <FaTheaterMasks className="emerge-icon theater_masks" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;