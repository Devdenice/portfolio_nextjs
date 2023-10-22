import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import AboutImg from "../../public/images/about-image.png";
import PortAboutImg from "../../public/images/portfolio-img.png";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChangeTab = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const scrollRef = useRef(null);
  return (
    <section className="w-full relative" id="about">
      {/* Blob Animation */}
      <div className="absolute top-20 -left-4 w-96 h-96 bg-[#ff82f3] rounded-full mix-blend-multiply  filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 left-60 w-96 h-96 bg-[#7b13ff] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-80 left-28 w-96 h-96 bg-[#400d64] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="text-white container py-24 px-5 lg:px-0 relative ">
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <Image
            src={PortAboutImg}
            width={500}
            height={500}
            alt="About Image"
            priority
            className="bg-[#181818] rounded-3xl"
          />
          <div className="mt-4  md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-neutral mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-info">
              I am a front-end developer with a passion for creating interactive
              and responsive web applications. I have experience working with
              JavaScript, React, Next.js, HTML, CSS and Git. I am a quick
              learner and I am always looking to expand my knowledge and skills
              set. I am a team player and I am excited to work with others to
              create amazing applications.
            </p>
            <div className="flex flex-row  mt-8">
              <TabButton
                selectTab={() => handleChangeTab("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleChangeTab("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleChangeTab("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>
            <div className="mt-8 text-info">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
