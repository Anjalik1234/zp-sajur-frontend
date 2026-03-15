import { useEffect } from "react";
import "./Activities.css";
//Tree plantation
import tp1 from "../../assets/images/Gallery/Tree-Plantation/tp1.jpeg";
import tp2 from "../../assets/images/Gallery/Tree-Plantation/tp2.jpeg";
import tp3 from "../../assets/images/Gallery/Tree-Plantation/tp3.jpeg";
import treeSide1 from "../../assets/images/Gallery/Tree-Plantation/gardener.png";
import treeSide2 from "../../assets/images/Gallery/Tree-Plantation/flowers.png";
import treeSide3 from "../../assets/images/Gallery/Tree-Plantation/gardener-4.png";

//Drawing competition
import dc1 from "../../assets/images/Gallery/Karyanubhav/dc1.jpeg";
import dc2 from "../../assets/images/Gallery/Karyanubhav/dc2.jpeg";
import dc3 from "../../assets/images/Gallery/Karyanubhav/dc3.png";
// import dc4 from "../../assets/images/Gallery/Karyanubhav/dc4.png";
import dc5 from "../../assets/images/Gallery/Karyanubhav/dc5.png";
//Aashadhi ekadashi
import v1 from "../../assets/images/Gallery/Vari/vari1.jpeg";
import v2 from "../../assets/images/Gallery/Vari/vari2.jpeg";
import v3 from "../../assets/images/Gallery/Vari/vari2.jpeg";
// import v4 from "../../assets/images/Gallery/Vari/pink-cosmos.png";
// import v5 from "../../assets/images/Gallery/Vari/lamp.png";
import v6 from "../../assets/images/Gallery/Vari/rangoli-2.png";

import cl1 from "../../assets/images/Gallery/Cleaning/clean1.jpeg";
import cl2 from "../../assets/images/Gallery/Cleaning/clean2.jpeg";
import cl3 from "../../assets/images/Gallery/Cleaning/clean3.jpeg";
import cl4 from "../../assets/images/Gallery/Cleaning/clean4.png";
import cl5 from "../../assets/images/Gallery/Cleaning/clean5.png";


import t1 from "../../assets/images/Gallery/Trip/trip1.jpeg";
import t2 from "../../assets/images/Gallery/Trip/trip2.jpeg";
import t3 from "../../assets/images/Gallery/Trip/trip3.jpeg";
import t4 from "../../assets/images/Gallery/Trip/school-bus.png";
import t5 from "../../assets/images/Gallery/Trip/butterfly.png";

// Cooking Activity
import cook1 from "../../assets/images/Gallery/Cooking/ck1.jpeg";
import cook2 from "../../assets/images/Gallery/Cooking/ck2.jpeg";
import cook3 from "../../assets/images/Gallery/Cooking/ck3.jpeg";
import cook4 from "../../assets/images/Gallery/Cooking/ck4.png";
import cook5 from "../../assets/images/Gallery/Cooking/ck5.png";

// Balbazaar
import b1 from "../../assets/images/Gallery/Balbazaar/b2.jpeg";
import b2 from "../../assets/images/Gallery/Balbazaar/b4.jpeg";
import b3 from "../../assets/images/Gallery/Balbazaar/b7.jpeg";
import b4 from "../../assets/images/Gallery/Balbazaar/market.png";
import b5 from "../../assets/images/Gallery/Balbazaar/vegetable.png";



const activitiesData = [
  {
    title: {
      en: "🌱 Tree Plantation Drive",
      mr: "🌱 वृक्षारोपण मोहीम",
    },
    date: {
      en: "June 2024",
      mr: "जून 2024",
    },
    description: {
      en: "Students actively participated in the tree plantation drive to promote environmental awareness and responsibility towards nature.",
      mr: "विद्यार्थ्यांनी पर्यावरणाबद्दल जागरूकता आणि निसर्गाप्रती जबाबदारी वाढवण्यासाठी वृक्षारोपण मोहिमेत सक्रिय सहभाग घेतला.",
    },
    photos: [tp1, tp2, tp3],
    sideImages: [treeSide1, treeSide2, treeSide3],
  },
  {
    title: {
      en: "🎨 Drawing Competition",
      mr: "🎨 चित्रकला स्पर्धा",
    },
    date: {
      en: "July 2024",
      mr: "जुलै 2024",
    },
    description: {
      en: "Children expressed their creativity through colorful drawings, showcasing imagination and artistic skills.",
      mr: "विद्यार्थ्यांनी रंगीत चित्रांद्वारे आपली कल्पकता आणि कलात्मक कौशल्ये व्यक्त केली.",
    },
    photos: [dc1, dc2, dc1],
    sideImages: [dc3, dc5],
  },
  {
    title: {
      en: "🪔 Aashadhi Ekadashi Celebration",
      mr: "🪔 आषाढी एकादशी उत्सव",
    },
    date: {
      en: "July 2024",
      mr: "जुलै 2024",
    },
    description: {
      en: "Students celebrated Aashadhi Ekadashi with devotion and enthusiasm. Bhajans, traditional attire, and cultural performances created a spiritual atmosphere in the school.",
      mr: "विद्यार्थ्यांनी भक्तीभावाने आणि उत्साहाने आषाढी एकादशी साजरी केली. भजन, पारंपरिक वेशभूषा आणि सांस्कृतिक कार्यक्रमांमुळे शाळेत आध्यात्मिक वातावरण निर्माण झाले.",
    },
    photos: [v3, v2, v1],
    sideImages: [v6],
  },
  {
    title: {
      en: "🧹 Cleanliness Drive",
      mr: "🧹 स्वच्छता अभियान",
    },
    date: {
      en: "August 2024",
      mr: "ऑगस्ट 2024",
    },
    description: {
      en: "Students participated in a cleanliness drive to spread awareness about hygiene and community responsibility. The activity encouraged teamwork and civic sense.",
      mr: "विद्यार्थ्यांनी स्वच्छता आणि सामाजिक जबाबदारीबाबत जागरूकता पसरवण्यासाठी स्वच्छता मोहिमेत सहभाग घेतला. या उपक्रमामुळे संघभावना आणि नागरिकत्वाची जाणीव वाढली.",
    },
    photos: [cl1, cl2, cl3],
    sideImages: [cl5, cl4],
  },
  {
    title: {
      en: "🚌 Educational School Trip",
      mr: "🚌 शैक्षणिक सहल",
    },
    date: {
      en: "December 2024",
      mr: "डिसेंबर 2024",
    },
    description: {
      en: "Students enjoyed an educational trip filled with learning and fun. The visit helped them explore new places, gain practical knowledge, and build unforgettable memories.",
      mr: "विद्यार्थ्यांनी शिक्षण आणि मनोरंजनाने भरलेली शैक्षणिक सहल अनुभवली. या सहलीमुळे त्यांना नवीन ठिकाणे पाहण्याची, प्रत्यक्ष ज्ञान मिळवण्याची आणि अविस्मरणीय आठवणी तयार करण्याची संधी मिळाली.",
    },
    photos: [t3, t2, t1],
    sideImages: [t4, t5],
  },
  {
    title: {
      en: "👩‍🍳 Cooking Activity",
      mr: "👩‍🍳 पाककला उपक्रम",
    },
    date: {
      en: "January 2025",
      mr: "जानेवारी 2025",
    },
    description: {
      en: "Students enthusiastically participated in a fun cooking activity where they learned basic food preparation skills. The activity encouraged teamwork, creativity, and awareness about healthy eating habits.",
      mr: "विद्यार्थ्यांनी आनंदाने पाककला उपक्रमात सहभाग घेतला. त्यांनी अन्न तयार करण्याची मूलभूत कौशल्ये शिकली. या उपक्रमामुळे संघभावना, सर्जनशीलता आणि आरोग्यदायी आहाराविषयी जागरूकता वाढली.",
    },
    photos: [cook3, cook2, cook1],
    sideImages: [cook5, cook4],
  },
  {
  title: {
    en: "🛍️ Bal Bazaar Activity",
    mr: "🛍️ बाल बाजार उपक्रम",
  },
  date: {
    en: "February 2025",
    mr: "फेब्रुवारी 2025",
  },
  description: {
    en: "Students enthusiastically participated in the Bal Bazaar activity where they set up small stalls and sold handmade items, snacks, and creative crafts. The activity helped them understand basic business concepts, money management, teamwork, and communication skills in a practical and fun way.",
    mr: "विद्यार्थ्यांनी बाल बाजार उपक्रमात उत्साहाने सहभाग घेतला. त्यांनी लहान स्टॉल लावून हस्तकला वस्तू, अल्पोपहार आणि विविध वस्तूंची विक्री केली. या उपक्रमामुळे त्यांना व्यवसायाची प्राथमिक माहिती, पैशाचे व्यवस्थापन, संघभावना आणि संवाद कौशल्ये प्रत्यक्ष अनुभवातून शिकता आली.",
  },
  photos: [b1, b2, b3],   // import your Bal Bazaar main images
  sideImages: [b4, b5],    // import decorative images if needed
},
];

const Activities = ({ language = "mr" }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="activities-page">
      <h2 className="activities-heading">
        {language === "mr" ? "📔 शाळेचे उपक्रम" : "📔 School Activities"}
      </h2>

      {activitiesData.map((event, index) => (
        <div key={index}>
          <div
            className={`event-row event-${index} ${
              index % 2 === 1 ? "reverse" : ""
            }`}
          >

            <div className="event-photos">
              {event.photos.map((photo, i) => (
                <div key={i} className={`polaroid polaroid-${i}`}>
                  <img src={photo} alt="event" />
                </div>
              ))}
            </div>

            <div className="event-content">
              <h3>{event.title[language]}</h3>
              {/* <span className="event-date">{event.date[language]}</span> */}
              <p>{event.description[language]}</p>

              {event.sideImages && (
                <div className="side-images">
                  {event.sideImages.map((img, i) => (
                    <img key={i} src={img} alt="Activity" />
                  ))}
                </div>
              )}
            </div>

          </div>

          {index !== activitiesData.length - 1 && (
            <hr className="event-divider" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Activities;