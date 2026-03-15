import i1 from "../../assets/images/Gallery/Infrastructure/i1.jpeg";
import i2 from "../../assets/images/Gallery/Infrastructure/i2.jpeg";
import i3 from "../../assets/images/Gallery/Infrastructure/i3.jpeg";
import i7 from "../../assets/images/Gallery/Infrastructure/i7.jpeg";
import i8 from "../../assets/images/Gallery/Infrastructure/i8.jpeg";
import i6 from "../../assets/images/Gallery/Infrastructure/i6.jpeg";
import i5 from "../../assets/images/Gallery/Infrastructure/i5.jpeg";
import i16 from "../../assets/images/Gallery/Infrastructure/i16.jpeg";
import i9 from "../../assets/images/Gallery/Infrastructure/i9.png";
import i10 from "../../assets/images/Gallery/Infrastructure/i10.png";
import i11 from "../../assets/images/Gallery/Infrastructure/i11.png";
import i12 from "../../assets/images/Gallery/Infrastructure/i12.png";
import i13 from "../../assets/images/Gallery/Infrastructure/i13.png";
import i14 from "../../assets/images/Gallery/Infrastructure/i14.png";
import i15 from "../../assets/images/Gallery/Infrastructure/i15.png";


import { useEffect } from "react";
import React, { useState } from "react";
import "./Infra.css";

const infraData = [
  {
    title: {
      en: "Classrooms",
      mr: "वर्गखोल्या",
    },
    desc: {
      en: "Spacious, well-ventilated and brightly lit classrooms that create a comfortable and engaging learning environment for students.",
      mr: "प्रशस्त, हवेशीर आणि प्रकाशमान वर्गखोल्या विद्यार्थ्यांसाठी आरामदायी व प्रेरणादायी शिक्षण वातावरण निर्माण करतात.",
    },
    image: i7,
    illustration: i9,
  },
  {
    title: {
      en: "Computer Laboratory",
      mr: "संगणक प्रयोगशाळा",
    },
    desc: {
      en: "Equipped with modern computers and digital resources to enhance students' technical knowledge and digital literacy skills.",
      mr: "आधुनिक संगणक आणि डिजिटल साधनांनी सुसज्ज प्रयोगशाळा विद्यार्थ्यांचे तांत्रिक ज्ञान व डिजिटल कौशल्ये वाढवते.",
    },
    image: i8,
    illustration: i10,
  },
  {
    title: {
      en: "Playground",
      mr: "खेळाचे मैदान",
    },
    desc: {
      en: "A large and safe playground where students enjoy sports, physical activities, and develop teamwork and leadership qualities.",
      mr: "मोठे व सुरक्षित मैदान जिथे विद्यार्थी क्रीडा आणि शारीरिक उपक्रमांचा आनंद घेतात तसेच संघभावना व नेतृत्वगुण विकसित करतात.",
    },
    image: i1,
    illustration: i11,
  },
  {
    title: {
      en: "Mid-Day Meal Kitchen",
      mr: "मध्यान्ह भोजन स्वयंपाकगृह",
    },
    desc: {
      en: "A clean and hygienic kitchen facility where nutritious meals are prepared daily to support students’ health and growth.",
      mr: "स्वच्छ व आरोग्यदायी स्वयंपाकगृहात दररोज पौष्टिक आहार तयार केला जातो, जो विद्यार्थ्यांच्या आरोग्य व वाढीसाठी उपयुक्त आहे.",
    },
    image: i6,
    illustration: i12,
  },
  {
    title: {
      en: "Clean Washrooms",
      mr: "स्वच्छ स्वच्छतागृहे",
    },
    desc: {
      en: "Well-maintained and hygienic washroom facilities ensuring safety, cleanliness, and comfort for all students.",
      mr: "विद्यार्थ्यांच्या सुरक्षितता, स्वच्छता आणि सोयीसाठी नीटनेटकी व स्वच्छ स्वच्छतागृहे उपलब्ध आहेत.",
    },
    image: i5,
    illustration: i13,
  },
  {
    title: {
      en: "School Garden",
      mr: "शाळेची बाग",
    },
    desc: {
      en: "A beautiful green garden that promotes environmental awareness and provides a peaceful atmosphere for learning.",
      mr: "सुंदर हिरवीगार बाग पर्यावरणाबद्दल जागरूकता निर्माण करते आणि शांत शिक्षण वातावरण प्रदान करते.",
    },
    image: i3,
    illustration: i14,
  },
  {
  title: {
    en: "Hydration Station",
    mr: "जलकुंभ",
  },
  desc: {
    en: "A clean and well-maintained water tank that ensures safe and continuous drinking water supply for students throughout the school day.",
    mr: "स्वच्छ व सुस्थितीत असलेला जलकुंभ विद्यार्थ्यांना शाळेच्या वेळेत सुरक्षित आणि सतत पिण्याचे पाणी उपलब्ध करून देतो.",
  },
  image: i16,          // main image of water tank
  illustration: i15,   // optional side illustration
},
];

const Infra = ({ language = "mr" }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`page-wrapper ${selectedImg ? "blur-page" : ""}`}>
        <section className="infra-section">

          <div className="school-title">
            <h1>
              {language === "mr"
                ? "जिल्हा परिषद प्राथमिक शाळा, साजूर"
                : "Zilla Parishad Primary School, Sajur"}
            </h1>
            <p>
              {language === "mr"
                ? "उज्ज्वल भविष्यासाठी बालमनांना सक्षम बनविणे"
                : "Empowering Young Minds for a Brighter Future"}
            </p>
          </div>

          <div className="main-school">
            <img src={i2} alt="School" />
          </div>

          {infraData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`infra-row ${isLeft ? "row-normal" : "row-reverse"}`}
              >
                <div
                  className={`infra-container 
                  ${isLeft ? "left-layout left-shape" : "right-layout right-shape"}`}
                >
                  <div className="infra-image">
                    <img
                      src={item.illustration}
                      alt={item.title[language]}
                    />
                  </div>

                  <div className="infra-content">
                    <h2>{item.title[language]}</h2>
                    <p>{item.desc[language]}</p>
                  </div>
                </div>

                <div
                  className="infra-illustration"
                  onClick={() => setSelectedImg(item.image)}
                >
                  <img src={item.image} alt="Infrastructure" />
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {selectedImg && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-btn"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>

            <img src={selectedImg} alt="Preview" />
          </div>
        </div>
      )}
    </>
  );
};

export default Infra;