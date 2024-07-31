"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      className="relative max-h-80 overflow-hidden lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[500px] lg:max-h-80 h-full 
      border border-white/[0.1] group/bento shadow-2xl dark:shadow-none hover:shadow-xl transition duration-200 shadow-input overflow-y-auto flex justify-center space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl ">
          {content.map((item, index) => (
            <div key={item.title + index}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:
                    (typeof window !== "undefined" &&
                      window.innerWidth < 769) ||
                    activeCard === index
                      ? 1
                      : 0.3,
                }}
                className="text-2xl font-bold md:opacity-1 text-slate-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:
                    (typeof window !== "undefined" &&
                      window.innerWidth < 769) ||
                    activeCard === index
                      ? 1
                      : 0.3,
                }}
                className="w-full text-sm lg:text-md m-0 p-0 lg:w-[300px] md:opacity-1 text-slate-800 dark:text-slate-300 md:max-w-sm my-16"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          " md:block h-60 w-80 rounded-md hidden bg-white sticky top-10 ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
