import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/Pin";
import Image from "next/image";
import { projectItems } from "@/app/data/personal/projectItems";
import MagicButton from "../ui/MagicButton";
import { ProjectType } from "@/app/types/useProps";

const Projects = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <h2 className="text-center mb-32 font-bold text-5xl sm:text-6xl tracking-tighter">
        Mes projets
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
        {projectItems.map((item: ProjectType) => (
          <PinContainer
            title={item.title}
            href={item.link}
            className="min-h-[25rem] max-h-[32.5rem] min-w-[20rem] max-w-[32.5rem]"
            key={item.id}
          >
            <Image
              src={item.img}
              alt="cover"
              width={500}
              height={500}
              className="inset-0 object-cover"
            />

            <h1 className="font-bold lg:text-2xl md:text-xl mt-2 text-base line-clamp-1">
              {item.title}
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.des}
            </p>
            <div className="flex items-center justify-center mt-7 mb-3">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      src={icon}
                      alt="icon"
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
              <a href={item.link}>
                <MagicButton
                  title="Découvrir"
                  position="right"
                  icon={<FaLocationArrow />}
                />
              </a>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
