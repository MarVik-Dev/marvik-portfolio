import React from "react";

import Slider from "../utils/Slider";
import { reviewItems } from "@/app/data/personal/reviewItems";

const Reviews = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center my-16 font-bold text-5xl sm:text-6xl tracking-tighter ">
          Quelques avis :
        </h2>

        <Slider items={reviewItems} options={{ loop: true }} />
      </div>
    </section>
  );
};

export default Reviews;
