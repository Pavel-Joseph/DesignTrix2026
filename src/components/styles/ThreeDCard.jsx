import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const ThreeDCard = ({ imgURL, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Subtle 3D tilt (reduced for full poster)
  const rotateX = useTransform(y, [-20, 20], [5, -5]);
  const rotateY = useTransform(x, [-20, 20], [-5, 5]);
  const scale = useTransform(y, [-20, 20], [1, 1.02]);
  const translateY = useTransform(x, [-50, 50], [5, -5]);

  return (
    <motion.div
      className={`w-full h-full rounded-xl shadow-2xl cursor-pointer overflow-hidden ${className}`}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xVal = ((e.clientX - rect.left) / rect.width) * 40 - 20;
        const yVal = ((e.clientY - rect.top) / rect.height) * 40 - 20;
        x.set(xVal);
        y.set(yVal);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Main 3D Container */}
      <motion.div
        className="absolute inset-0 w-full h-full shadow-2xl"
        style={{
          rotateX,
          rotateY,
          scale,
          translateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent rounded-xl shadow-inner" />

        {/* FULL SIZE POSTER IMAGE */}
        <motion.div className="absolute inset-0 flex items-center justify-center p-2">
          <img
            src={imgURL}
            alt="Event Poster"
            className="w-full h-full object-contain max-w-none max-h-none rounded-lg shadow-xl brightness-105 hover:brightness-110 transition-all duration-300"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDCard;
