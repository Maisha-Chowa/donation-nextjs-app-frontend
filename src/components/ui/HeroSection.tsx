/* eslint-disable react/no-unescaped-entities */
//import banner from "@/assests/banner.png";
import banner from "../../assets/banner.png";
import education from "../../assets/Rectangle 4287-1.png";
import health from "../../assets/Health.png";
import food from "../../assets/banner-2.png";
import { Button } from "antd";
import Image from "next/image";

import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HeroSection: React.FC = () => (
  <Carousel autoplay className="mx-24">
    <div>
      <Image
        className="drop-shadow-2xl h-[450px] w-[100%]"
        src={banner}
        alt=""
      />
    </div>
    <div>
      <Image
        className="drop-shadow-2xl h-[450px] w-[100%]"
        src={health}
        alt=""
      />
    </div>
    <div>
      <Image
        className="drop-shadow-2xl h-[450px] w-[100%]"
        src={education}
        alt=""
      />
    </div>
    <div>
      <Image className="drop-shadow-2xl h-[450px] w-[100%]" src={food} alt="" />
    </div>
  </Carousel>
);

export default HeroSection;
