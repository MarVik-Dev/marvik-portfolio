"use client";
import Image from "next/image";

import { ItemsType } from "@/app/types/useProps";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const Slider: React.FC<ItemsType> = (props: ItemsType) => {
  const { items, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ stopOnInteraction: false, direction: "backward" }),
  ]);

  return (
    <div className="embla">
      <div className="mx-auto w-full px-4 md:px-8">
        <h2 className="text-center opacity-70 text-3xl py-10 sm:text-4xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          {props.title}
        </h2>
        <div
          className="embla__viewport "
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
          ref={emblaRef}
        >
          <div className="embla__container">
            {items.map(({ name, url, alt, quote, logo, picture }, index) => {
              if (url) {
                return (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                      <div
                        className="mx-12 flex flex-col xl:flex-row items-center justify-center "
                        key={alt}
                      >
                        <Image
                          width={100}
                          height={100}
                          key={alt}
                          src={url}
                          alt={`${name} icon`}
                          className="flex-none h-14 w-auto text-[#101010]"
                        />
                        <span className="flex flex-col mx-5 gap-1">
                          <span className=" font-bold leading-[1.6] text-center mt-5 ">
                            {name}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              if (quote) {
                return (
                  <div
                    key={alt}
                    className={`${
                      quote
                        ? "w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-500 p-5 md:p-16 md:w-[650px]"
                        : "flex items-center"
                    }`}
                  >
                    <blockquote>
                      <div
                        aria-hidden="true"
                        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                      ></div>
                      {/* change text color, text-lg */}

                      {quote ?? (
                        <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-black dark:text-white font-normal">
                          {quote}
                        </span>
                      )}
                      <div className="relative z-20 mt-6  flex flex-row items-center">
                        {/* add this div for the profile img */}
                        {logo ? (
                          <div className="me-3" key={`logo-${name}`}>
                            <Image
                              src={logo}
                              width={40}
                              height={40}
                              className="object-cover h-full w-full"
                              alt=""
                            />
                          </div>
                        ) : picture ? (
                          <Image
                            src={picture}
                            width={100}
                            height={100}
                            className="object-cover"
                            alt=""
                            key={`picture-${name}`}
                          />
                        ) : url ? (
                          <Image
                            src={url}
                            width={50}
                            height={50}
                            className="object-cover h-full w-full"
                            alt=""
                            key={`picture-${name}`}
                          />
                        ) : (
                          <></>
                        )}

                        <span className="flex flex-col mx-5 gap-1">
                          {/* change text color, font-normal to font-bold, text-xl */}
                          <span className="text-xl font-bold leading-[1.6] text-black-500 dark:text-white">
                            {name}
                          </span>
                        </span>
                      </div>
                    </blockquote>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
