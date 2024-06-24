"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "../public/assets/profile.jpg";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="mix-blend-lighten"
      >
        <div className="absolute w-[200px] h-[200px] xl:w-[380px] xl:h-[380px] flex items-center justify-center">
          <Image
            src={Profile}
            alt=""
            priority
            quality={100}
            className="w-[186px] h-[186px] xl:w-[350px] xl:h-[350px] rounded-full "
          />
        </div>
        <motion.svg
          className="w-[200px] h-[200px] xl:w-[380px] xl:h-[380px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#F19ED2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
