import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/main/HeroSection";
import AboutMe from "./components/main/AboutMe";
import Skills from "./components/main/Skills";
import TechStack from "./components/main/TechStack";
import Qualification from "./components/main/Qualification";
import Projects from "./components/projects/Projects";
import ProjectsSection from "./components/projects/ProjectsSection";
import Project01 from "./components/projects/Project01";
import Footer from "./components/foot/Footer";

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
    <div className="bg-white dark:bg-black dark:text-dim_white !scroll-smooth">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <AboutMe />
      <TechStack />
      {/* <Skills /> */}
      {/* <Qualification /> */}
      {/* <Projects /> */}
      <ProjectsSection />
      {/* <Footer isDark={isDark} /> */}
    </div>
  );
}

export default App;
