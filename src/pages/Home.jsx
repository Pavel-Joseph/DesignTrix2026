import React, { useEffect, useRef } from "react";
import CuteAnimal from "../components/ModelComponents/CuteAnimal";
import SplitText from "../components/styles/SplitText";
import ShinyText from "../components/styles/ShinyText";
import { COLORS_TOP } from "../constants";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  easeIn,
  useScroll,
  useTransform,
} from "framer-motion";
import useControlScroll from "../hooks/useControlScroll";
import { description, regLink } from "../data";
import ShiftingCountdown from "../components/ShiftingCountDown";

const Home = ({ handleHover }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0], [1, 0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const backgroundImage = useMotionTemplate`radial-gradient(100% 145% at 30% 0%, transparent 50%, ${color})`;
  const textColor = useMotionTemplate`${color}`;
  return (
    <motion.div
      id="home"
      style={{
        backgroundImage: "url(/images/bg.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: easeIn,
      }}
    >
      <motion.div
        ref={ref}
        style={{ backgroundImage }}
        className="flex flex-col max-sm:flex-wrap items-center h-screen px-4 pt-16"
      >
        <div className="flex flex-col w-1/2 space-y-24 justify-start items-center max-sm:hidden">
          <div className="flex flex-row justify-start items-center max-sm:hidden">
            <div className="w-24 h-24 object-cover">
              <img src="/images/clg_logo.png" alt="" srcset="" />
            </div>
            <motion.h1
              style={{ color: textColor }}
              className="text-5xl font-extrabold roboto-serif-main"
            >
              R.M.K. Engineering College
            </motion.h1>
          </div>
          <div className="text-center">
            <motion.h1
            initial={{
              opacity:0,
              scale:0.5,
            }}
            whileInView={{
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:0.5,
              ease:"easeIn"
            }}
              className="text-2xl font-bold text-white/70"
            >
             <h1 className="uppercase text-3xl">Department of Computer Science and Design</h1>
             <h1 className="font-semibold mt-6">Produly Presents</h1>
            </motion.h1>
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-wrap space-x-4 w-full justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center gap-6 lg:max-h-1/2 lg:h-1/2">
            <div {...handleHover}>
              <motion.h1 style={{color:textColor,fontFamily: "Orbitron, sans-serif"}} className="font-mono text-4xl max-sm:hidden md:text-6xl lg:text-7xl font-bold text-white">
                Designtrix'26
              </motion.h1>
            </div>
            <div className="max-w-[720px]">
              <p className="text-wrap text-gray-300 pl-2 text-sm sm:text-md text-justify">
                {/* Check for window width and conditionally display intro */}
                <span className="text-justify w-full text-[17px]">
                  {description.content}
                </span>
              </p>
            </div>
            <div className="hidden sm:flex">
              <button
                {...handleHover}
                onClick={() => openInNewTab(regLink)}
                className="bg-primary px-8 py-2 rounded-full text-white font-bold btn hover:bg-cyan-500 transition-all  duration-300"
              >
                Register
              </button>
            </div>
          </div>
          {/* exist on phone */}
          <div className="flex flex-col sm:hidden w-full pr-5 justify-center">
            <ShiftingCountdown border={border} boxShadow={boxShadow} />
            <div className="flex justify-center py-3">
              <button
                {...handleHover}
                onClick={() => openInNewTab(regLink)}
                className="bg-primary w-2/3  py-2 rounded-full text-white font-bold btn hover:bg-cyan-500 transition-all  duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
