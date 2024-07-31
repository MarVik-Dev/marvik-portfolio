"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import EcosystemIcon from "@/public/images/icons/ecosystem.svg";

type Props = {
  domain: {
    title: string;
    description: string;
  };
};

const Feature = ({ domain }: Props) => {
    const offsetX = useMotionValue(-100)
    const offsetY = useMotionValue(-100)
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);

      border.current?.style.setProperty("--x", `${offsetX}px`);
      border.current?.style.setProperty("--y", `${offsetY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      key={domain.title}
      className="border border-black/30 dark:border-white/30 bg-white/40 dark:bg-[#121212]/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 dark:bg-white bg-black dark:text-black text-white justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 text-xl font-bold">{domain.title}</h3>
      <p className="mt-2 dark:text-white/70 text-black/70 ">
        {domain.description}
      </p>
    </div>
  );
};

export default Feature;
