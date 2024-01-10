import './App.css';
import { useState } from 'react';
import Header from './components/head/Header';
import HeroSection from './components/main/HeroSection';
// import Main from './components/main/Main';

function App() {
  const [isDark, setIsDark] = useState(false);

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
