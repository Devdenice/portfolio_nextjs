import React from "react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const EmailSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 px-5 lg:px-0">
      <div>
        <h4 className="text-neutral font-bold text-xl mb-2">
          Let&apos;s Connect
        </h4>
        <p className="text-info w-9/12 mb-2">
          I&apos;m currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="flex gap-3">
          <Link href="https://github.com/Devdenice">
            <VscGithub size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/denice-pelo-950812210/">
            <AiFillLinkedin size={30} />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-3 ">
          <div>
            <label htmlFor="email" className="text-info font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="mt-1 bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-info font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="mt-1 bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-info font-medium">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Your message......"
              className="textarea mt-1 bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button className="mt-4 w-full bg-[#7b13ff] hover:bg-[#400d64]  rounded-lg py-2.5 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
