// Dark/Light Theme Switcher Toggle

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Toggle = ({ onToggle, isDark }) => {
  return (
    <>
      <button onClick={onToggle} className="h-6 w-6 text-black-500 -ms-2">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

export default Toggle;
