import React, { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import {
  useMotionValue,
  useMotionTemplate,
  animate,
  motion,
} from "framer-motion";
import Text from "./Text";
import theme from "/song/theme.mp3";
import { COLORS_TOP } from "../../constants";
import ShiftingCountdown from "../ShiftingCountDown";
import "./style.css";
import Loading from "../Loading";
// import AudioPlayer from "../AudioPLayer";

const HeroComponent = () => {
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const handleOnClick = () => {
    navigate("/content#home");
  };
  useEffect(() => {
    if (window.innerWidth < 640) {
      navigate("/content#home"); // Redirect to `/content` if on small screens
    }
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 30% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const textColor=useMotionTemplate`${color}`
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadEmittersPlugin(engine); // Load the emitters plugin
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="flex h-screen w-full flex-col items-center bg-[url(/images/about_bg.gif)]" >
      {/* <audio id="audio" src="/song/theme.mp3" preload="auto" ref={}/> */}
      <div className="flex items-center absolute z-10 top-20">
        <div className="w-24 h-24 object-cover">
          <img src="/images/clg_logo.png" alt="" srcset="" />
        </div>
        
          
            <motion.h1 style={{color:textColor}} className="text-5xl font-extrabold uppercase roboto-serif-main">R.M.K. Engineering College</motion.h1>
          
      </div>
      
      <div className="flex h-screen w-full flex-col justify-center items-center">
        <motion.div
          className="h-screen relative w-full z-10 px-24 flex flex-col justify-center items-center"
          style={{ backgroundImage }}
        >
          <div className="flex flex-col">
            
            <div className="text-8xl text-white relative z-10 title text-center lg:flex lg:flex-col lg:justify-center lg:items-center">
            <motion.h1 style={{color:textColor}} className="text-4xl font-extrabold uppercase">Department of Computer Science and Design</motion.h1>
            <motion.h1 style={{color:textColor}} className="text-3xl font-extrabold">Proudly presents</motion.h1>
              <Text/>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-2 mt-96">
            <div className="w-full flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center gap-2">
            <motion.h1 style={{color:textColor}} className="text-3xl font-extrabold">A National Level Symposium</motion.h1>
              <ShiftingCountdown border={border} boxShadow={boxShadow} />
              </div>
            </div>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 10,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="z-20 text-gray-50 rounded-full w-64 text-bold bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
              onClick={handleOnClick}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "#020617" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 150 },
              attract: { distance: 10, duration: 0.4, factor: 2 },
            },
          },
          particles: {
            life: { duration: 0.5 },
            number: { value: 75, density: { enable: true, area: 800 } },
            color: { value: [COLORS_TOP[0], COLORS_TOP[1]] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.4, max: 0.8 },
              animation: { enable: true, speed: 3, minimumValue: 0.2 },
            },
            size: { value: { min: 5, max: 8 } },
            move: {
              enable: true,
              speed: 3,
              direction: "top",
              outModes: { default: "bounce" },
            },
            stroke: { width: 0.3, color: "#ffffff" },
          },
          // emitters: {
          //   direction: "none",
          //   life: { count: 2, duration: 5 },
          //   rate: { quantity: 10, delay: 0.4 },
          //   size: { width: 100, height: 100 },
          //   position: { x: 50, y: 50 },
          // },
          detectRetina: true,
        }}
      />
      {/* <AudioPlayer /> */}
    </div>
  );
};

export default HeroComponent;
