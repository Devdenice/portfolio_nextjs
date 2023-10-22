import React from "react";
import Image from "next/image";
import { GoEye } from "react-icons/go";
import { GoCode } from "react-icons/go";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center gap-3 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link "
          >
            <GoCode className="h-10 w-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] group-hover/link:text-white  cursor-pointer" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <GoEye className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#adb7be] group-hover/link:text-white  cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
