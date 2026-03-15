import { useState, useEffect } from "react";
import "./Home.css";

import school1 from "../../assets/images/carousal/school1.png";
import school2 from "../../assets/images/carousal/school2.png";
import school3 from "../../assets/images/carousal/school3.png";
import school4 from "../../assets/images/carousal/school4.png";
import school5 from "../../assets/images/carousal/school5.png";
import school6 from "../../assets/images/carousal/school6.png";
import school7 from "../../assets/images/carousal/school7.png";
import school8 from "../../assets/images/carousal/school8.png";

const slides = [
  {
    type: "image",
    src: school1,
    text: {
      en: {
        heading: "Zilla Parishad School – Knowledge, Values and Confidence",
        description:
          "Our school builds a strong foundation of values along with quality education.",
      },
      mr: {
        heading: "जिल्हा परिषद शाळा – ज्ञान, संस्कार आणि आत्मविश्वास",
        description:
          "गुणवत्तापूर्ण शिक्षणासोबतच जीवनमूल्यांची भक्कम पायाभरणी करणारी आमची शाळा.",
      },
    },
  },
  {
    type: "image",
    src: school2,
    text: {
      en: {
        heading: "Zilla Parishad School – Knowledge, Values and Confidence",
        description:
          "Our school builds a strong foundation of values along with quality education.",
      },
      mr: {
        heading: "जिल्हा परिषद शाळा – ज्ञान, संस्कार आणि आत्मविश्वास",
        description:
          "गुणवत्तापूर्ण शिक्षणासोबतच जीवनमूल्यांची भक्कम पायाभरणी करणारी आमची शाळा.",
      },
    },
  },
  {
    type: "image",
    src: school3,
    text: {
      en: {
        heading: "Education for a Brighter Future",
        description:
          "Today's education shapes tomorrow's responsible citizens.",
      },
      mr: {
        heading: "उज्वल भविष्यासाठी शिक्षणाची वाटचाल",
        description:
          "आजचे शिक्षण, उद्याच्या यशस्वी नागरिकांची घडण घडवते.",
      },
    },
  },
  {
    type: "image",
    src: school4,
    text: {
      en: {
        heading: "Education for a Brighter Future",
        description:
          "Today's education shapes tomorrow's responsible citizens.",
      },
      mr: {
        heading: "उज्वल भविष्यासाठी शिक्षणाची वाटचाल",
        description:
          "आजचे शिक्षण, उद्याच्या यशस्वी नागरिकांची घडण घडवते.",
      },
    },
  },
  {
    type: "image",
    src: school5,
    text: {
      en: {
        heading: "Modern Education with Indian Values",
        description:
          "Balancing digital learning with culture and tradition.",
      },
      mr: {
        heading: "आधुनिक शिक्षण पद्धती, मराठी संस्कारांची जोड",
        description:
          "डिजिटल शिक्षणासोबत परंपरा आणि संस्कृतीचा समतोल.",
      },
    },
  },
  {
    type: "image",
    src: school6,
    text: {
      en: {
        heading: "Modern Education with Indian Values",
        description:
          "Balancing digital learning with culture and tradition.",
      },
      mr: {
        heading: "आधुनिक शिक्षण पद्धती, मराठी संस्कारांची जोड",
        description:
          "डिजिटल शिक्षणासोबत परंपरा आणि संस्कृतीचा समतोल.",
      },
    },
  },
  {
    type: "image",
    src: school7,
    text: {
      en: {
        heading: "Equal Opportunities for Every Student",
        description:
          "Opening doors of quality education for rural students.",
      },
      mr: {
        heading: "प्रत्येक विद्यार्थ्यासाठी समान संधी",
        description:
          "ग्रामीण भागातील विद्यार्थ्यांना गुणवत्तेची दारे उघडणारी शाळा.",
      },
    },
  },
  {
    type: "image",
    src: school8,
    text: {
      en: {
        heading: "Equal Opportunities for Every Student",
        description:
          "Opening doors of quality education for rural students.",
      },
      mr: {
        heading: "प्रत्येक विद्यार्थ्यासाठी समान संधी",
        description:
          "ग्रामीण भागातील विद्यार्थ्यांना गुणवत्तेची दारे उघडणारी शाळा.",
      },
    },
  },
];


function Home({ language = "mr" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="carousel-slide fade">
        <img
          src={slides[currentIndex].src}
          alt="slide"
          className="carousel-media"
        />

        <div className="overlay"></div>

        <div className="carousel-content">
          {/* Top small heading (static) */}
          <span className="carousel-top-text">
            {language === "mr" ? "आपले स्वागत आहे !!" : "Warm Welcome !!"}
          </span>

          {/* Existing slide heading */}
          <h1>{slides[currentIndex].text[language]?.heading}</h1>

          {/* Existing description */}
          <p>{slides[currentIndex].text[language]?.description}</p>

        </div>

      </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}


export default Home;