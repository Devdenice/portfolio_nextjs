"use client";
import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import WaysToContactMeSection from "@/components/WaysToContactMeSection";
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <main className="z-20 w-full flex min-h-screen flex-col overflow-clip  ">
      <Navbar />
      <div className="z-0 container mx-auto mt-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <WaysToContactMeSection />
        <EmailSection />
      </div>
      <FooterSection />
      {/* Scroll to Top Button */}
      <ScrollToTop
        smooth
        top={1200}
        // color="#7b13ff"
        color="white"
        width="25"
        height="25"
        className="flex items-center justify-center !bg-gradient-to-tr from-[#ff82f3] via-[#7b13ff]  to-[#400d64] drop-shadow-lg "
      />
    </main>
  );
}
