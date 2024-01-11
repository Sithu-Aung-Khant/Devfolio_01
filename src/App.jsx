import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/head/Header';
import HeroSection from './components/main/HeroSection';
// import Main from './components/main/Main';

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
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      {/* <Main /> */}
    </>
  );
}

export default App;
