import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const ThreeDCard = ({imgURL}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate based on cursor movement
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Scale up on hover
  const scale = useTransform(y, [-50, 50], [1, 1.05]);
  //translate
  const translateY=useTransform(x,[-150,50],[15,-15])

  return (
    <motion.div
      className="w-80 h-full rounded-lg shadow-xl border border-cyan-400/20 p-4 cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000, // Ensures a proper 3D effect
        translateY,
      }}
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const xVal = ((e.clientX - left) / width) * 100 - 50;
        const yVal = ((e.clientY - top) / height) * 100 - 50;
        x.set(xVal);
        y.set(yVal);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* 3D Effect Wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background Layer (Moves down for depth) */}
        <motion.div
          className="absolute inset-0 bg-black rounded-lg border border-cyan-400/10 shadow-lg"
          style={{
            translateY,
            scale: 1.1, // Slightly bigger for depth illusion
            zIndex: 1,
          }}
        />

        {/* Floating Image (Pops out more) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: "translateZ(100px) translateY(-10px)", // Moves up further
          }}
        >
          <img
            src={imgURL}
            alt="Technical Event"
            className="object-fit w-full h-full rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDCard;