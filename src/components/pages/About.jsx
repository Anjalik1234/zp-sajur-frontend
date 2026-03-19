import "./About.css";
import students from "../../assets/images/About/students.png";
import bulb from "../../assets/images/About/light-bulb.png";
import girl from "../../assets/images/About/school-3.png";

const aboutText = {
  mr: {
    heading: "आमच्याबद्दल",
    intro:
      "जिल्हा परिषद प्राथमिक शाळा, साजूर ही शाळा १९२६ साली स्थापन झाली असून ती स्थानिक स्वराज्य संस्थेद्वारे व्यवस्थापित केली जाते. ही शाळा ग्रामीण भागात असून कराड तालुका, सातारा जिल्हा, महाराष्ट्र येथे स्थित आहे. शैक्षणिक सत्र जून महिन्यापासून सुरू होते.",

    points: [
      "स्थापना : १ मार्च १९२६",
      "इयत्ता १ ते ७ (संयुक्त शिक्षण)",
      "अध्यापनाचे माध्यम : मराठी",
      "शासकीय इमारत व ६ सुस्थित वर्गखोल्या",
      "ग्रंथालय (१००० पुस्तके) व १७ संगणक",
      "मध्यान्ह भोजन शाळेतच तयार व वितरित",
    ],

    locationTitle: "📍 शाळेचे स्थान:",
    schoolName: "जिल्हा परिषद प्राथमिक शाळा",
    address: "साजूर, तालुका कराड, जिल्हा सातारा, महाराष्ट्र",
  },

  en: {
    heading: "About Us",
    intro:
      "Zilla Parishad Primary School, Sajur was established in 1926 and is managed by the Local Body. The school is located in a rural area of Karad Block, Satara District, Maharashtra. The academic session starts in April.",

    points: [
      "Established on 1 March 1926",
      "Classes from Grade 1 to 7 (Co-educational)",
      "Medium of instruction: Marathi",
      "Government building with 6 well-maintained classrooms",
      "Library with 1000 books & 17 computers",
      "Fresh mid-day meals served at school.",
    ],

    locationTitle: "📍 School Location:",
    schoolName: "Zilla Parishad Primary School",
    address: "Sajur, Taluka Karad, District Satara, Maharashtra",
  },
};

function About({ language = "mr" }) {
  const data = aboutText[language];

  return (
    <section className="about-section" id="aboutUs">
      <h2 className="about-heading">{data.heading}</h2>
      <div className="about-two-column">
        {/* LEFT SIDE */}
        <div className="about-left">
          <img src={girl} alt="Girl" className="about-card-girl" />
          <p className="about-intro">{data.intro}</p>

          <ul className="about-points">
            {data.points.map((point, index) => (
              <li key={index}>
                <span className="tick">✔</span>
                {point}
              </li>
            ))}
          </ul>
          <img src={bulb} alt="Bulb" className="about-card-bulb" />
        </div>

        {/* RIGHT SIDE */}
        <div className="about-card-wrapper">
          <img src={students} alt="Student" className="about-card-img" />
          {/* <img src={floral} alt="Student" className="about-card-floral" /> */}
          <div className="about-right">
            <div className="location-box">
              <h3>{data.locationTitle}</h3>
              <h1>{data.schoolName}</h1>
              <p>🏫 {data.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;