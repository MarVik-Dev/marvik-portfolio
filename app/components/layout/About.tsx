import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import React from "react";
import Slider from "../utils/Slider";
import { StickyScroll } from "../ui/StickyScroll";
import Skills from "./Skills";
import { workToolItems } from "@/app/data/personal/workToolItems";
import { aboutItems, gridContactItems } from "@/app/data/personal/aboutItems";
import { ToolType } from "@/app/types/useProps";

export default function About() {
  // To catch all iconLists datas BUT with conditional (because Devops not complete yet)
  const myTools: ToolType[] | ToolType = workToolItems.reduce(
    (acc: ToolType[], curr) => {
      if (curr.iconLists) {
        return acc.concat(
          curr.iconLists.map(
            (tool: { name?: string }): ToolType => ({
              id: 0,
              name: "",
              url: "",
              title: curr.title,
              ...tool,
            })
          )
        );
      } else {
        return acc;
      }
    },
    []
  );

  return (
    <section id="about" className="container py-[72px] sm:py-24">
      <h2 className="text-center opacity-80 text-5xl sm:text-6xl sm:max-w-[648px] my-20 mx-auto font-bold tracking-tighter">
        Présentation
      </h2>
      <Skills />
      <BentoGrid className="py-20 container">
        <StickyScroll content={aboutItems} />
        {gridContactItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <div className="hidden md:block">
        <Slider
          options={{ loop: true }}
          title={" Mes outils favoris"}
          items={myTools}
        />
      </div>
    </section>
  );
}
