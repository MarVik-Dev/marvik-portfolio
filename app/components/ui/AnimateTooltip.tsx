"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ToolType } from "@/app/types/useProps";

export const AnimatedTooltip = ({ item }: { item: ToolType }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className=" relative group"
        key={item.name}
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-white relative z-30 text-base">
                {item.name}
              </div>
              <div className="text-white text-xs">{item.category}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          onMouseMove={handleMouseMove}
          height={60}
          width={60}
          src={item.url}
          alt={item.name ?? ""}
          className="!m-0 !p-0 object-top dark:bg-slate-100 shadow-xl rounded-full h-10 w-10 lg:h-14  lg:w-14 border-2 group-hover:scale-105 z-0 group-hover:z-30 border-white-100  dark:border-background-900 relative transition duration-500"
        />
      </div>
    </>
  );
};
