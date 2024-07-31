"use client";
import React from "react";
import shipbImage from "@/public/images/hero/shipb.png";
import helixImage from "@/public/images/hero/helix2.png";
import Image from "next/image";
import { motion } from "framer-motion";
import MagicButton from "../ui/MagicButton";
import Link from "next/link";
import { personalInfo } from "@/app/data/personal/PersonalData";

const Hero = () => {
  return (
    <div className="text-white dark:bg-[linear-gradient(to_bottom,#121212,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] bg-[linear-gradient(to_bottom,#fff,#ddc9ff_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%]  left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#fff_82%,#9560EB)] dark:bg-[radial-gradient(closest-side,#121212_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative">
        <div className="flex items-center  justify-center">
          <span className="dark:text-transparent inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30 text-slate-900 dark:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text [-webkit-background-clip:text">
            {personalInfo.nikname} - Portfolio 2.0
          </span>
          {/* <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span> */}
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-center inline-flex">
              {personalInfo.poste}
            </h1>

            <motion.div
              className="absolute right-[567px] bottom-[20px] animate-[levitate_15s_ease_infinite_1s] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={helixImage}
                alt=""
                height="200"
                width="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[567px] bottom-[40px] animate-[levitate_10s_ease_infinite_1s]  hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={shipbImage}
                alt=""
                className="max-w-none"
                draggable="false"
                height="170"
                width="170"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center text-xl mt-8">
            {personalInfo.introduction}
          </div>
        </div>
        <div className="hidden sm:flex md:mt-20 justify-center mt-8">
          <Link href="#about">
            <MagicButton
              title="Découvrir"
              position="center"
              otherClasses="md:w-60"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
