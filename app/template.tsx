"use client";
import { motion } from "framer-motion";
// import custom hooks
import useScrollProgress from "@/app/hooks/useScrollProgress";

type Props = {
  children: React.ReactNode;
};

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: Props) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="enter"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* Completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed  dark:bg-white bg-black w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
    </>
  );
};

export default Template;
