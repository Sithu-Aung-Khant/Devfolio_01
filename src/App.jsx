import "./App.css";
import { useState, useEffect } from "react";
import {
  Navbar,
  HeroSection,
  AboutMe,
  AboutSection,
  Skills,
  TechStack,
  Qualification,
  ProjectsSection,
  Footer,
  IntroSection,
} from "./components";

function App() {
  // To check system preference of dark/light mode
  // const prefersDarkMode = window.matchMedia(
  //   "(prefers-color-scheme: dark)",
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
    <div className="bg-white dark:bg-black dark:text-dim_white !scroll-smooth">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <IntroSection />
      <AboutSection />
      {/* <TechStack /> */}
      <Skills />
      <ProjectsSection />
      <Footer isDark={isDark} />
      {/* <HeroSection /> */}
      {/* <AboutMe /> */}
      {/* <Qualification /> */}
    </div>
  );
}

export default App;
