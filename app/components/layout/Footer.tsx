import React from "react";
import XSocial from "@/public/images/icons/x-social.svg";
import TiktokIcon from "@/public/images/icons/tiktok.svg";
import YoutubeIcon from "@/public/images/icons/youtube.svg";
import InstaIcon from "@/public/images/icons/insta.svg";
import PinterestIcon from "@/public/images/icons/pinterest.svg";
import LinkedinIcon from "@/public/images/icons/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/app/data/personal/PersonalData";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="dark:bg-[linear-gradient(to_top,#121212,#200D42_60%,#4F21A1_80%,#A46EDB_95%)] bg-[linear-gradient(to_top,#fff,#f6f0ff_70%,#4F21A1_90%,#A46EDB_95%)] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#fff_82%,#9560EB)] dark:bg-[radial-gradient(closest-side,#121212_82%,#9560EB)] bottom-[calc(100%-96px)] sm:bottom-[calc(100%-120px)] pointer-events-none"></div>

      <div className="container pt-[72px] sm:pt-24">
        <Image
          src="/images/backgrounds/footer-grid.svg"
          alt="grid"
          layout="fill"
          objectFit="cover"
          className="opacity-70 pointer-events-none"
        />
        <div className="container my-5 border-t  border-black/20  dark:border-white/20">
          <div className=" gap-4 m-5 flex justify-between ">
            <div className="text-center text-xs md:text-md">
              Codé avec 💻 et beaucoup de ☕️ | SIGNATURE 🗼
            </div>
            <Link target="_blank" href={personalInfo.linkedin}>
              <LinkedinIcon />
            </Link>
            {/* <ul className="flex justify-center gap-2.5 ">
              <li>
                <XSocial />
              </li>
              <li>
                <InstaIcon />
              </li>
              <li>
                <TiktokIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <PinterestIcon />
              </li>
              <li className="cursor-pointer absolute">
                <Link target="_blank" href={personalInfo.linkedin}>
                  <LinkedinIcon />
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
