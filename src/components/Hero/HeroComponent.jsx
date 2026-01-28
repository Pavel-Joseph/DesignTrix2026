import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useMotionValue, useMotionTemplate, animate, motion } from 'framer-motion';
import Text from './Text';// Keep if needed
import COLORSTOP from '../../constants';
import ShiftingCountdown from '../ShiftingCountDown';
import './style.css';
import Loading from '../Loading';
import AudioPlayer from '../AudioPLayer';
import collegeLogo from '../../images/clglogo.png';  // Your college logo
import heroBg from '../../images/hero-bg.jpg';  // ← ADD YOUR IMAGE HERE (public/images/)

const HeroComponent = () => {
  const navigate = useNavigate();
  const color = useMotionValue(COLORSTOP[0]);

  useEffect(() => {
    animate(color, COLORSTOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const handleOnClick = () => navigate('/content/home');

  useEffect(() => {
    if (window.innerWidth < 640) navigate('/content/home');  // Mobile redirect
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 30% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const textColor = useMotionTemplate`${color}`;

  return (
    <div className="flex h-screen w-full flex-col items-center" 
         style={{ 
           backgroundImage: `url(${heroBg})`,  // ← NEW: Static image
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundBlendMode: 'overlay'  // Blends with gradient
         }}>
      

      {/* College header */}
      <div className="flex items-center absolute z-10 top-20">
        <div className="w-24 h-24 object-cover">
          <img src={collegeLogo} alt="College Logo" />
        </div>
        <motion.h1 
          style={{ color: textColor }} 
          className="text-5xl font-extrabold uppercase roboto-serif-main"
        >
          R.M.K. Engineering College
        </motion.h1>
      </div>

      {/* Main hero content + gradient overlay */}
      <div className="flex h-screen w-full flex-col justify-center items-center">
        <motion.div 
          className="h-screen relative w-full z-10 px-24 flex flex-col justify-center items-center" 
          style={{ backgroundImage }}  // Keep animated gradient OVER image
        >
          {/* Title content unchanged */}
          <div className="flex flex-col">
            <div className="text-8xl text-white relative z-10 title text-center lg:flex lg:flex-col lg:justify-center lg:items-center">
              <motion.h1 style={{ color: textColor }} className="text-4xl font-extrabold uppercase">
                Department of Computer Science and Design
              </motion.h1>
              <motion.h1 style={{ color: textColor }} className="text-3xl font-extrabold">
                Proudly presents
              </motion.h1>
              <Text />
            </div>
          </div>

          {/* Countdown + button unchanged */}
          <div className="flex flex-col w-full justify-center items-center gap-2 mt-96">
            <div className="w-full flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <motion.h1 style={{ color: textColor }} className="text-3xl font-extrabold">
                  A National Level Technical Symposium
                </motion.h1>
                <ShiftingCountdown />
                <div style={{ border, boxShadow }}></div>
              </div>
            </div>
            <motion.button
              style={{ border, boxShadow }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 10 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="z-20 text-gray-50 rounded-full w-64 text-bold bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
              onClick={handleOnClick}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AudioPlayer />
    </div>
  );
};

export default HeroComponent;
