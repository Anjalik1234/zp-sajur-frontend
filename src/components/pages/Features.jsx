import "./Features.css";
import f1 from "../../assets/images/Features/f1.jpeg";
import f2 from "../../assets/images/Features/f2.jpeg";
import f3 from "../../assets/images/Features/f3.jpeg";
import f7 from "../../assets/images/Features/f7.jpeg";
import f5 from "../../assets/images/Features/f4.jpeg";
import f6 from "../../assets/images/Features/f6.jpeg";

const featuresText = {
  mr: {
    heading: "आमची वैशिष्ट्ये",
    center: {
      title: "जिल्हा परिषद प्राथमिक शाळा, साजूर",
      // desc: "गुणवत्तापूर्ण शिक्षण आणि सर्वांगीण विकासासाठी समर्पित",
    },
    items: [
      { title: "मध्यान्ह भोजन", desc: "मध्यान्ह भोजन योजना", image: f1 },
      { title: "अनुभवी शिक्षक", desc: "समर्पित व प्रशिक्षित शिक्षकवर्ग.", image: f7 },
      { title: "स्मार्ट लर्निंग", desc: "तंत्रज्ञान-सक्षम अध्यापन.", image: f3 },
      { title: "मोफत शिक्षण", desc: "सर्वांसाठी पूर्णतः मोफत शिक्षण.", image: f6 },
      {title: "मोफत आरोग्य तपासणी",desc: "विद्यार्थ्यांसाठी नियमित आरोग्य तपासणी.",image: f5,},
      { title: "स्पर्धा तयारी", desc: "भविष्यासाठी सक्षम घडवणूक.", image: f2 },
    ],
  },

  en: {
    heading: "Our Features",
    center: {
      title: "Zilla Parishad School, Sajur",
      // desc: "Committed to quality education & holistic development",
    },
    items: [
      {title: "Mid-Day Meal",desc: "Daily nutritious meals for students.",image: f1,},
      { title: "Experienced Teachers", desc: "Dedicated and skilled teaching staff.", image: f7 },
      { title: "Smart Learning", desc: "Technology-enabled education.", image: f3 },
      { title: "Free Education", desc: "Quality education at no cost.", image: f6 },
      {title: "Free Health Checkup",desc: "Regular health checkups for students.",image: f5,},
      { title: "Competitive Prep", desc: "Preparing students for the future.", image: f2 },
    ],
  },
};

function Features({ language = "mr" }) {
  const { heading, center, items } = featuresText[language];

  return (
    <section className="features-section" id="features">
      <h2 className="features-heading">{heading}</h2>

      <div className="features-container">
        {/* Center Card */}
        <div className="center-card">
          <h3>{center.title}</h3>
          <p>{center.desc}</p>
        </div>

        {/* Feature Cards */}
        {items.map((item, index) => (
          <div key={index} className={`feature-card card-${index + 1}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;