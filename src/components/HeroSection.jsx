import React from "react";
import Image from "next/image";
import HeroImg from "../../public/images/hero-image.png";
import PortfolioImg from "../../public/images/portfolio-img.png";
import { TypeAnimation } from "react-type-animation";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoTiktok,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12 my-20  relative ">
        <div className="col-span-7 place-self-center text-center md:text-left">
          <h1 className="text-neutral mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff82f3] via-[#7b13ff] to-[#400d64]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Denice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "UI/Ux Designer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-info w-9/12 sm:w-8/12 md:w-full md:pr-32 mx-auto text-base font-normal sm:text-lg mb-6 lg:text-xl">
            I&apos;m an aspiring Front-End Web Developer with a passion for
            crafting visually appealing and user-friendly websites.
          </p>
          <div className="flex flex-col md:flex-row w-[200px] md:w-full mx-auto gap-6   ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className=" px-1 py-1 w-full md:w-fit bg-gradient-to-br from-[#ff82f3] via-[#7b13ff] to-[#400d64] rounded-full bg-transparent "
            >
              <span className="text-info font-medium block bg-base-100 hover:bg-opacity-80 rounded-full px-6 py-3">
                Download CV
              </span>
            </motion.button>
          </div>
          <div className="absolute bottom-[-80px]  w-full lg:w-auto">
            <div className="flex text-3xl gap-3 justify-center items-center">
              <Link href="https://github.com/Devdenice">
                <BiLogoGithub size={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/denice-pelo-950812210/">
                <BiLogoLinkedinSquare size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-12 lg:mt-0 relative">
          <div className="animate-pulse absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[410px] lg:h-[410px] bg-gradient-to-br from-[#ff82f3] via-[#400d64] to-[#7b13ff] blur-xl rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={PortfolioImg}
              alt="Hero Image"
              width={500}
              height={500}
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
