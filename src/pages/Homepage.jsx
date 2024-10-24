"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion"; // assuming you have these utils for animations
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Icons for social media
import IconCloudDemo from "@/components/IconCloudDemo";

const Homepage = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-[50px] md:mt-0 w-full z-[2] bg-transparent gap-10"
      >
        {/* Left Section with Text */}
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className=" py-[8px]  opacity-[0.9]"
          >
            <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide">
              Fullstack Developer
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-3xl md:text-4xl font-bold text-white max-w-[600px]"
          >
            <span>
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                scalable
              </span>{" "}
              websites, apps, and software solutions.
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            With expertise in both front-end and back-end development, I create
            responsive, user-friendly, and high-performance projects tailored to
            meet your business needs.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            className="mt-4 flex gap-6 items-center"
          >
            {/* CTA Button */}
            <a
              href="#projects"
              className="py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300"
            >
              Explore My Work
            </a>

            {/* Social Media Links */}
            <div className="flex gap-4 text-white text-3xl">
              <a
                href="https://github.com/drengual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-purple-500 transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-500 transition-all duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-purple-500 transition-all duration-300" />
              </a>
              <a href="mailto:drengual17@example.com">
                <FaEnvelope className="hover:text-cyan-500 transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

        <hr className="border-red-900"></hr>

        {/* Right Section for future animations or images */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          {/* <RightSideHeroSection /> */}
          <IconCloudDemo />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Homepage;
