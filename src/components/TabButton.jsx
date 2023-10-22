import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-purple-400 border-b-4 border-purple-500"
    : "text-[#adb7be] ";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold text-info hover:text-neutral ${buttonClass}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
