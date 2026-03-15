import "./PencilBar.css";

function PencilBar({ language, changeLanguage }) {
  return (
    <div className="pencil-bar">
      <div className="pencil-yellow"></div>
      <div className="pencil-green"></div>

      {/* Running Slogan */}
      <div className="slogan-wrapper">
        <div className="slogan-text">
          {language === "en"
            ? "🌸  WELCOME! WELCOME! WELCOME!  🌸   Celebrating 100 Glorious Years of Excellence    🌸    A Century of Knowledge, Values & Success   🌸"
            : "🌸  सुस्वागतम्! सुस्वागतम्! सुस्वागतम्!  🌸  १०० वर्षांच्या गौरवशाली परंपरेचा उत्सव   🌸   ज्ञान, संस्कार आणि यशाचा शतकमहोत्सव   🌸"}
        </div>
      </div>

      {/* Language Selector */}
      <div className="language-switch">
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <span>|</span>
        <button
          className={language === "mr" ? "active" : ""}
          onClick={() => changeLanguage("mr")}
        >
          मराठी
        </button>
      </div>
    </div>
  );
}

export default PencilBar;