import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/main/HeroSection";
import AboutMe from "./components/main/AboutMe";
import Skills from "./components/main/Skills";
import TechStack from "./components/main/TechStack";
import Qualification from "./components/main/Qualification";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/foot/Footer";
import WorkTogether from "./components/foot/WorkTogether";

function App() {
  // To check system preference of dark/light mode
  // const prefersDarkMode = window.matchMedia(
  //   '(prefers-color-scheme: dark)'
  // ).matches;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="dark:bg-black dark:text-dim_white !scroll-smooth">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <AboutMe />
      <TechStack />
      {/* <Skills /> */}
      {/* <Qualification /> */}
      <Projects />
      {/* <ContactMe /> */}
      {/* <Footer /> */}
      <WorkTogether isDark={isDark} />
    </div>
  );
}

export default App;
