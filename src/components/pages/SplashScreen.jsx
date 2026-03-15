import React, { useEffect } from "react";
import "./SplashScreen.css";
import logo from "../../assets/zp-logo.png";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // Create MANY flowers
  const flowers = Array.from({ length: 100 });

  return (
    <div className="splash-container">

      {/* Flower Layer */}
      <div className="flower-layer">
        {flowers.map((_, i) => (
          <span
            key={i}
            className="flower"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${18 + Math.random() * 20}px`
            }}
          >
            🌸
          </span>
        ))}
      </div>

      <div className="splash-content">
        <img src={logo} alt="School Logo" className="splash-logo" />

        <h1 className="hundred-years">१०० वर्षे पूर्ण</h1>

        <h2 className="splash-text">
          शिक्षणाचा दर्जा आणि मुलांच्या सर्वांगीण विकासासाठी नेहमी कटिबद्ध
        </h2>

        <p className="splash-subtext">
          शाळेला गावाचा आधार, गावाला शाळेचा अभिमान
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;