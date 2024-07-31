"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import messageImage from "@/public/images/footer/message.png";
import Image from "next/image";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { personalInfo } from "@/app/data/personal/PersonalData";

import ico1Image from "@/public/images/footer/ico1.png";

const Communication = () => {
  const containRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      id="contact"
      className=" py-[90px] sm:py-48 text-center"
      ref={containRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={ico1Image}
            alt="StrongBox"
            className="absolute -top-[100px] size-80 hidden lg:block right-[calc(100%+24px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={messageImage}
            alt="helix star"
            className="absolute hidden z-10 lg:flex top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl p-2 tracking-tighter">
          Partageons ensemble
        </h2>
        <p className="text-xl dark:text-white/70 text-black/70 my-12">
          Une mission, <span className="text-purple">un projet</span>, une idée
          ?
        </p>
        <div className="flex justify-center">
          <a href={`mailto:${personalInfo.email}`}>
            <MagicButton
              title="Parlons-en"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="w-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Communication;
