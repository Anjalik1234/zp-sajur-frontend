import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaUsers,
} from "react-icons/fa";
import logo from "../../assets/zp-logo.png";
import isoLogo from "../../assets/iso-logo.png"
const year = new Date().getFullYear();

const footerText = {
  mr: {
    slogan: "शिक्षणाचा दर्जा आणि मुलांच्या सर्वांगीण विकासासाठी नेहमी कटिबद्ध.",
    sub: "शाळेला गावाचा आधार, गावाला शाळेचा अभिमान",
    contactHeading: "संपर्क",
    visitorHeading: "भेट देणारे",
    address: "साजूर, ता. कराड, जि. सातारा, महाराष्ट्र",
    rights: "सर्व हक्क राखीव.",
    developed: "विकसित केले:",
    dev2: "अंजली काळे",
    dev1: "वैष्णवी कांबळे",
  },
  en: {
    slogan: "Committed to quality education and holistic development of children.",
    sub: "School is the support of the village, pride of the community",
    contactHeading: "Contact",
    visitorHeading: "Visitors",
    address: "Sajur, Taluka Karad, District Satara, Maharashtra",
    rights: "All Rights Reserved.",
    developed: "Developed by:",
    dev2: "Anjali Kale",
    dev1: "Vaishnavi Kamble",
  },
};

const Footer = ({ language = "mr" }) => {
  const text = footerText[language];

  const [visits, setVisits] = useState(0);

  // Simple Local Visitor Counter
  useEffect(() => {
    fetch("https://zpsajur-backend-production.up.railway.app/api/visit")
      .then((res) => res.json())
      .then((data) => setVisits(data.count))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT SECTION */}
        <div className="footer-left">

          <div className="footer-logos">
            <img src={logo} alt="School Logo" className="footer-logo school-logo" />
            <img src={isoLogo} alt="ISO Logo" className="footer-logo iso-logo" />
          </div>

          <p className="footer-slogan">{text.slogan}</p>
          <p className="footer-sub">{text.sub}</p>

        </div>

        {/* CENTER SECTION - VISITOR COUNTER */}
        <div className="footer-center">
          <h3>{text.visitorHeading}</h3>
          <div className="visitor-box">
            <FaUsers />
            <span className="visitor-count">{visits}</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3 className="footer-heading">{text.contactHeading}</h3>

          <div className="footer-contact">
            <FaHome />
            <span>{text.address}</span>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <span>zpsajur2012@gmail.com</span>
          </div>

          <div className="footer-contact">
            <FaPhone />
            <span>9881182914</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-line">
          © {year} ZP Primary School Sajur | {text.rights}
        </div>

        <div className="footer-line footer-developed">
          {text.developed}{" "}
          <span id="names">
            <a
              href="https://www.linkedin.com/in/vaishnavi-kamble-966b95290/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              <b>{text.dev1}</b>
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/anjali-kale-b87677276/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              <b>{text.dev2}</b>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
