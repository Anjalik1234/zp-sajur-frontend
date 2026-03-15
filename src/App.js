import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SplashScreen from "./components/pages/SplashScreen";
import Navbar from "./components/Navbar";
import PencilBar from "./components/PencilBar";
import Home from "./components/pages/Home";
import Features from "./components/pages/Features";
import Teachers from "./components/pages/Teachers";
import Smc from "./components/pages/Smc";
import Gallery from "./components/pages/Gallery";
import LST from "./components/pages/LST";
import About from "./components/pages/About";
import Activities from "./components/pages/Activities";
import Infra from "./components/pages/Infra";
import Gr from "./components/pages/Gr";
import Calendar from "./components/pages/Calendar";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/pages/Footer";
import Contribute from "./components/pages/Contribute";
import Explore from "./components/pages/Explore";


import First from "./components/pages/1st";
import Second from "./components/pages/2nd";
import Third from "./components/pages/3rd";
import Fourth from "./components/pages/4th";
import Fifth from "./components/pages/5th";
import Sixth from "./components/pages/6th";
import Seventh from "./components/pages/7th";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [showSplash, setShowSplash] = useState(true);

  const location = useLocation();

  useEffect(() => {

  if (location.pathname === "/" && location.state?.scrollTo) {

    const id = location.state.scrollTo;

    const timer = setTimeout(() => {

      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

    }, 200);

    return () => clearTimeout(timer);

  }

}, [location]);

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("siteLanguage");
    if (savedLang) setLanguage(savedLang);
  }, []);

  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("siteLanguage", lang);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <PencilBar language={language} changeLanguage={changeLanguage} />
          <Navbar language={language} />

          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home language={language} />
                    <About language={language} />
                    <Features language={language} />
                    <Teachers language={language} />
                    <Smc language={language} />
                    <Gallery language={language} />
                    <LST language={language} />
                    <Gr language={language} />
                    <ContactUs language={language} />
                    <Calendar language={language} />
                    <Footer language={language} />
                  </>
                }
              />

              <Route
                path="/activities"
                element={<Activities language={language} />}
              />
              <Route
                path="/infra"
                element={<Infra language={language} />}
              />

              <Route path="/contribute" element={<Contribute language={language} />} />

              <Route
                path="/first"
                element={<First language={language} />}
              />
              <Route
                path="/second"
                element={<Second language={language} />}
              />
              <Route
                path="/third"
                element={<Third language={language} />}
              />
              <Route
                path="/fourth"
                element={<Fourth language={language} />}
              />
              <Route
                path="/fifth"
                element={<Fifth language={language} />}
              />
              <Route
                path="/sixth"
                element={<Sixth language={language} />}
              />
              <Route
                path="/seventh"
                element={<Seventh language={language} />}
              />
              <Route
                path="/explore"
                element={<Explore language={language} />}
              />
            </Routes>
          </div>

        </>
      )}
    </>
  );
}

export default App;