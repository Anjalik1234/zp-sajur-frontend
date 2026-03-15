import "./Navbar.css";
import schoolLogo from "../assets/zp-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import {useState} from 'react';

const navbarText = {
  mr: {
    schoolName: 
    (
      <>
        <span className="school-line1">जिल्हा परिषद प्राथमिक शाळा,</span>
        <span className="school-line2">साजूर</span>
      </>
    ),
    menu: {
      about_us: "आमच्याबद्दल",
      features: "वैशिष्ट्ये",
      teachers: "शिक्षकवृंद",
      smc: "शाळा व्यवस्थापन समिती",
      gallery: "गॅलरी",
      study: "चला अभ्यास करूया",
      gr: "शासन निर्णय",
      contactus: "संपर्क ",
      contribute: "योगदान",
    },
  },
  en: {
    schoolName: (
      <>
        <span className="school-line1">Zilla Parishad Primary School,</span>
        <span className="school-line2">Sajur</span>
      </>
    ),
    menu: {
      about_us: "About us",
      features: "Features",
      teachers: "Teachers",
      smc: "School Committee",
      gallery: "Gallery",
      study: "Let's Study",
      gr: "GR",
      contactus: "Contact Us",
      contribute: "Contribute",
    },
  },
};

function Navbar({ language = "mr" }) {
  const text = navbarText[language];
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Smooth scroll function (React Router safe)
  const scrollToSection = (id) => {

  if (location.pathname !== "/") {

    navigate("/", {
      state: { scrollTo: id }
    });

  } else {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

  }

};

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <span
          className="logo-wrapper"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <img src={schoolLogo} alt="School Logo" className="logo" />
        </span>
        <span className="school-name"><a href="/">{text.schoolName}</a></span>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => {scrollToSection("aboutUs"); setMenuOpen(false); }}>
            {text.menu.about_us}
          </li>

          <li onClick={() => {scrollToSection("features"); setMenuOpen(false); }}>
            {text.menu.features}
          </li>

          <li onClick={() => {scrollToSection("teachers"); setMenuOpen(false); }}>
            {text.menu.teachers}
          </li>

          <li onClick={() => {scrollToSection("smc"); setMenuOpen(false); }}>
            {text.menu.smc}
          </li>

          <li onClick={() => {scrollToSection("gallery"); setMenuOpen(false); }}>
            {text.menu.gallery}
          </li>

          <li onClick={() => {scrollToSection("study"); setMenuOpen(false); }}>
            {text.menu.study}
          </li>

          <li onClick={() => {scrollToSection("gr"); setMenuOpen(false); }}>
            {text.menu.gr}
          </li>

          <li onClick={() => {scrollToSection("contactus"); setMenuOpen(false); }}>
            {text.menu.contactus}
          </li>

          <li className="nav-icon">
            <i className="fa-regular fa-calendar" onClick={() => scrollToSection("calendar")}></i>
          </li>

          <li
            className="contribute-btn"
            onClick={() => navigate("/contribute")}
          >
            {text.menu.contribute}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;