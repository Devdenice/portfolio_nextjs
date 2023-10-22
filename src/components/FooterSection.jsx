import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoTiktok,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const FooterSection = () => {
  const icons = [
    {
      name: <BiLogoGithub />,
      links: "https://github.com/Devdenice",
    },
    {
      name: <BiLogoLinkedinSquare />,
      links: "https://www.linkedin.com/in/denice-pelo-950812210/",
    },
  ];
  return (
    <div className="bg-[#181818] mt-20 px-5 lg:px-0 ">
      <div className="flex flex-col container mx-auto py-8 px-4 ">
        <div className="flex justify-between mt-16">
          <div className="text-white">LOGO</div>
          <div className="flex gap-2 text-white">
            <Link href="#about" className="cursor-pointer">
              About
            </Link>
            <Link href="#contact" className="cursor-pointer">
              Contact
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>
        <hr className="my-10 border-1 border-white" />
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex gap-1">
            {icons.map((icon, index) => (
              <Link
                href={icon.links}
                key={index}
                className="text-xl cursor-pointer text-white"
              >
                {icon.name}
              </Link>
            ))}
          </div>
          <div className="text-white text-base font-normal mb-16">
            All Rights Reserved {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
