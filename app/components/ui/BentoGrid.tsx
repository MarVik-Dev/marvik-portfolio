"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import animationData from "@/app/data/confetti.json";

import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import GridGlobe from "./GridGlobe";

import { personalInfo } from "@/app/data/personal/PersonalData";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Typescript", "Javascript", "NodeJS"];
  const rightLists = ["NestJS", "ReactJS", "NextJS", "TailwindCSS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = `${personalInfo.email}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border  dark:border-white/[0.2]  border-white/[0.1] group/bento shadow-xl shadow-input dark:shadow-none justify-between  flex flex-col space-y-4",
        className
      )}
    >
      <div className={`h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              height={50}
              width={50}
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5`}>
          {spareImg && (
            <Image
              height={100}
              width={100}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight 2 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {/* for the 3d globe */}
          {id === 2 && (
            <div className="w-full m-5">
              <div
                className={`absolute flex items-center flex-auto -bottom-5 right-0 ${
                  copied ? "block" : "hidden"
                }`}
              >
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
              <div className="z-10 relative">
                <MagicButton
                  title={copied ? "Email copié!" : "Enregistrer mon email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
              <div className="z-10">
                <GridGlobe />
              </div>
            </div>
          )}
          {/* Tech stack list div */}
          {id === 1 && (
            <div className="flex gap-1 lg:gap-5  text-white w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
