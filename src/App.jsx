import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/main/HeroSection';

function App() {
  // To check system preference of dark/light mode
  // const prefersDarkMode = window.matchMedia(
  //   '(prefers-color-scheme: dark)'
  // ).matches;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prevDarkMode) => !prevDarkMode);
  };
  return (
    <>
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
    </>
  );
}

export default App;
