import React, { useEffect } from "react";

const Switch = ({ onToggle, isDark }) => {
  const handleKeyPress = (event) => {
    if (event.key === "m" && event.ctrlKey) {
      onToggle();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onToggle]);

  return (
    <label
      htmlFor="check"
      className="w-12 h-6 bg-white dark:bg-black border border-brown03 dark:border-dim_white rounded-full relative cursor-pointer"
    >
      <input
        type="checkbox"
        id="check"
        checked={isDark}
        onClick={onToggle}
        className="sr-only peer"
      />
      <span className="w-2/5 h-4/5 rounded-full bg-brown03  absolute left-1 top-0.5 peer-checked:bg-dim_white peer-checked:left-6 transition-all duration-500"></span>
    </label>
  );
};

export default Switch;
