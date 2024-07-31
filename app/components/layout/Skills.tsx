import React from "react";
import { Button } from "../ui/MovingBorders";
import { AnimatedTooltip } from "../ui/AnimateTooltip";
import Image from "next/image";
import { workToolItems } from "@/app/data/personal/workToolItems";

const Skills = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-6  gap-4">
      {workToolItems.map((card) => (
        <Button
          key={card.id}
          //   random duration will be fun, I think, may be not
          duration={Math.floor(Math.random() * 20000) + 10000}
          borderRadius="1.75rem"
          style={{
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className=" text-black-900 dark:text-white px-5 bg-white dark:bg-[#121212]"
        >
          <div className="md:flex md:items-center p-2 md:p-0 md:justify-around">
            <Image
              width={100}
              height={100}
              src={card.thumbnail}
              alt={card.thumbnail}
              className=" hidden xl:flex w-24"
            />
            <div className="flex flex-col py-5  gap-4">
              <h1 className="lg:text-start text-lg text-center lg:text-xl font-bold">
                {card.title}
              </h1>
              <div className="flex">
                {card.iconLists &&
                  card.iconLists.length > 0 &&
                  card.iconLists.map((icon) =>
                    icon.id < 6 ? (
                      <div
                        key={icon.id}
                        className=" rounded-full  flex items-center justify-center w-full"
                      >
                        <AnimatedTooltip item={icon} />
                      </div>
                    ) : null
                  )}
              </div>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Skills;
