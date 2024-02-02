import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, About, Projects, Contact, Intro, Skills } from "./components";

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
      <Intro />
      <About />
      <Skills isDark={isDark} />
      <Projects />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
