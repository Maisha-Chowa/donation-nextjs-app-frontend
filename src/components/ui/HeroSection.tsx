/* eslint-disable react/no-unescaped-entities */
//import banner from "@/assests/banner.png";
import banner from "../../assets/banner.png";
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
  <Carousel autoplay>
    <div>
      <Image className="drop-shadow-2xl h-[30%] w-[100%]" src={banner} alt="" />
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <Image className="drop-shadow-2xl h-[30%] w-[100%]" src={banner} alt="" />
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <Image className="drop-shadow-2xl h-[30%] w-[100%]" src={banner} alt="" />
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <Image className="drop-shadow-2xl h-[30%] w-[100%]" src={banner} alt="" />
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default HeroSection;
