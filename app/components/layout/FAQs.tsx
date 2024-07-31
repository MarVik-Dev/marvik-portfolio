import React from "react";
import { AccordionItem } from "../ui/Accordion";
import { FAQItems } from "@/app/data/personal/faqItems";
import { FAQType } from "@/app/types/useProps";

const FAQs = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#5D2CA8]">
      <div className="container py-[72px] sm:py-24">
        <h2 className="text-center opacity-80 text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Questions curieuses ?
        </h2>
        <div className="mt-12 max-w-[900px] mx-auto">
          {FAQItems.map((item: FAQType) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
