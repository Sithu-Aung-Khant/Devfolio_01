import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <h1>Hi, I'm Sithu Aung Khant</h1>
      <p>A Front End Developer</p>
    </>
  );
}

export default App;
