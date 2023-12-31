import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-neutral border-purple-500"
    : "text-neutral border-slate-600 hover:border-info";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2  px-6 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
