import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Text from "./Text";
import ShiftingCountdown from "../ShiftingCountDown";
import "./style.css";

const HeroComponent = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/content#home");
  };

  useEffect(() => {
    if (window.innerWidth < 640) {
      navigate("/content#home");
    }
  }, []);

  return (
    <div 
      className="flex h-screen w-full flex-col items-center" 
      style={{
        backgroundImage: `url(/images/hero-bg.gif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Translucent overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* College header */}
      <div className="flex items-center absolute z-20 top-20">
        <div className="w-24 h-24 object-cover">
          <img src="/images/clg_logo.png" alt="R.M.K. Engineering College" />
        </div>
        <motion.h1 
          className="text-5xl font-extrabold uppercase roboto-serif-main ml-4 text-gold-400 drop-shadow-2xl [text-shadow:0_0_20px_rgba(255,215,0,0.8)]"
        >
          R.M.K. Engineering College
        </motion.h1>
      </div>

      {/* Main content */}
      <div className="flex h-screen w-full flex-col justify-center items-center relative z-20">
        <motion.div className="h-screen relative w-full z-10 px-24 flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <div className="text-8xl text-gold-400 relative z-10 title text-center lg:flex lg:flex-col lg:justify-center lg:items-center [text-shadow:0_0_20px_rgba(255,215,0,0.8)]">
              <motion.h1 className="text-4xl font-extrabold uppercase font-orbitron tracking-wider leading-tight drop-shadow-2xl">
                Department of Computer Science and Design
              </motion.h1>
              <motion.h1 className="text-3xl font-extrabold font-orbitron tracking-wider leading-tight drop-shadow-2xl">
                Proudly presents
              </motion.h1>
              <Text />
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center gap-2 mt-96">
            <div className="w-full flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <motion.h1 className="text-3xl font-extrabold font-orbitron tracking-wider leading-tight text-gold-400 drop-shadow-2xl [text-shadow:0_0_20px_rgba(255,215,0,0.8)]">
                  A National Level Technical Symposium
                </motion.h1>
                <ShiftingCountdown />
              </div>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 10 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="z-20 text-gold-400 rounded-full w-64 text-bold bg-black/30 px-4 py-2 transition-all hover:bg-gold-500/20 hover:text-gold-200 border-2 border-gold-400/50 hover:border-gold-300 shadow-2xl hover:shadow-gold-500/30 font-bold font-orbitron tracking-wider"
              onClick={handleOnClick}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponent;
