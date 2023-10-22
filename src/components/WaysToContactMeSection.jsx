import React from "react";
import {
  BiLogoGmail,
  BiPhoneCall,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiLogoInstagram,
} from "react-icons/bi";

const contactMe = [
  {
    icons: <BiLogoGmail />,
    info: "denicepelo2@gmail.com",
  },
  {
    icons: <BiPhoneCall />,
    info: "+63 (969) 445 6641",
  },
  {
    icons: <BiLogoLinkedinSquare />,
    info: "Denice Pelo",
  },
  {
    icons: <BiLogoFacebookSquare />,
    info: "Denice Pelo",
  },
  {
    icons: <BiLogoInstagram />,
    info: "@peloooooop",
  },
];

const WaysToContactMeSection = () => {
  return (
    <section className="py-20 text-center px-5 lg:px-0" id="contact">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-neutral ">Ways To Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 w-9/12 mx-auto">
        {contactMe.map((contact, index) => (
          <div
            key={index}
            className="flex  bg-[#181818] items-center  gap-4  px-10 py-3 rounded-lg"
          >
            <div className="text-3xl text-[#adb7be]">{contact.icons}</div>
            <div className="text-white">{contact.info}</div>
          </div>
        ))}
        {/* <div>
            <BiLogoGmail />
          </div>
          <div className="">denicepelo2@gmail.com</div> */}
      </div>
    </section>
  );
};

export default WaysToContactMeSection;
