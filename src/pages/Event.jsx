import React, { useRef } from "react";
import ThreeDCard from "../components/styles/ThreeDCard";
import TrueFocus from "../components/styles/TrueFocus";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import SpotlightCard from "../components/styles/SpotlightCard";
import { regLink } from "../data";

const Desc = ({ text }) => {
  const lines = text.split("\n");
  
  return (
    <>
      {lines.map((line, lineIndex) => (
        <p key={lineIndex} className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
          {/* Now split line by <strong>...</strong> and render parts */}
          {line.split(/<\/?strong>/gi).map((part, partIndex) => {
            if (partIndex % 2 === 1) {
              return <strong key={partIndex}>{part}</strong>;
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </p>
      ))}
    </>
  );
};
const RulesList = ({ rules }) => (
  <ul className="list pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-300 break-words">
    {rules.map((rule, index) => (
      <li key={index} className="">
        {/* Apply same <strong> parsing as Desc */}
        {rule.split(/<\/?strong>/gi).map((part, partIndex) => {
          if (partIndex % 2 === 1) {
            return <strong key={partIndex}>{part}</strong>;
          }
          return <span key={partIndex}>{part}</span>;
        })}
      </li>
    ))}
  </ul>
);

const Event = ({
  progress,
  range,
  name,
  desc,
  smallImg,
  bigImg,
  rules,
  bgLeftGrad,
  bgRightGrad,
  handleHover,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scaleMain = useTransform(progress, range, [1, 0.5]);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="px-3 sm:px-6 md:px-12 lg:px-24 mb-12 py-4 sm:py-6 h-screen sticky top-0">
      <motion.div
        style={{ scale: scaleMain }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="relative overflow-hidden w-full h-screen px-3 sm:px-6 md:px-12 py-4 sm:py-6 flex flex-col gap-3 sm:gap-6 md:gap-12 items-start bg-gray-900 rounded-lg"
      >
        {/* New Gradient Background */}
        <div className={`absolute inset-0 ${bgLeftGrad} `}></div>
        <div className={`absolute inset-0 ${bgRightGrad} `}></div>

        {/* Main Content */}
        <div
          className="relative z-10 w-full flex flex-col gap-6 md:gap-12 max-h-screen h-full"
          ref={containerRef}
        >
          {/* Title Section */}
          <div className="w-full flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 items-center text-center sm:text-left">
            <h1 style={{fontFamily: "Henny Penny, system-ui"}} className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              <TrueFocus
                sentence={name}
                manualMode={true}
                borderColor="red"
                blurAmount={"4"}
                className=""
              />
            </h1>
            <button
              {...handleHover}
              onClick={() => openInNewTab(regLink)}
              className="btn hover:bg-black/30 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-0 border border-white shadow-md rounded-full px-4 sm:px-6 py-2 text-white bg-gray-900/20"
            >
              Register
            </button>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Section - About */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <SpotlightCard className="bg-transparent text-white p-3 sm:p-6 rounded-lg shadow-lg border-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                <p className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-cyan-400">What?</p>
                <Desc text={desc} />
              </SpotlightCard>

              {/* Image Below About */}
              {/*<div
                {...handleHover}
                className="overflow-hidden relative rounded-lg hover:scale-110 transition duration-300"
              >
                <motion.div
                  style={{ scale }}
                  className="w-full rounded-lg shadow-lg border border-red-400/20 hover:brightness-110"
                >
                  <img
                    src={smallImg}
                    alt="Event"
                    className="object-cover w-full h-48 sm:h-64 rounded-lg"
                    loading="lazy"
                  />
                </motion.div>
              </div>*/}
            </div>

            {/* Middle Section - Rules */}
            <SpotlightCard className="h-auto bg-transparent text-white p-3 sm:p-6 rounded-lg shadow-lg border-0 hover:scale-105 transition-transform duration-300">
              <p className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-red-400">Rules:</p>
              <RulesList rules={rules} />
            </SpotlightCard>

            {/* Right Section - Standalone Image */}
            <div className="flex justify-center items-start md:col-span-1">
              <ThreeDCard imgURL={bigImg} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
