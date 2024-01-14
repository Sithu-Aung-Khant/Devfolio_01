// Dark/Light Theme Switcher Toggle

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const Toggle = ({ onToggle, isDark }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'm' && event.ctrlKey) {
      onToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onToggle]);

  return (
    <>
      <button onClick={onToggle} className="h-6 w-6 text-black-500 -ms-2">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

export default Toggle;
