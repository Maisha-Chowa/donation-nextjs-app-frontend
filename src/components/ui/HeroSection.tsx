"use client";
import React from "react";
import CorouselImage from "./CorouselImage";
const HeroSection: React.FC = () => (
  <div className="grid grid-col-1 gap-4 lg:grid-cols-2 my-20 ">
    <CorouselImage />
    <div className="mx-auto my-4 px-8">
      <h2 className="text-xl pt-4 text-slate-800">Smiling faces are the ...</h2>
      <p className="text-4xl font-bold pt-4 text-sky-950">
        Best <span className="text-fuchsia-600">Gratitude!</span>
      </p>
      <p className="text-lg font-bold pt-4 text-slate-800 text-wrap">
        Next Donation : donate to charity projects around the world
      </p>
      <p className="text-lg  pt-4 text-slate-500 text-wrap">
        Next Donation connects nonprofits, donors, and companies in nearly every
        country in the world. We help fellow nonprofits access the funding,
        tools, training, and support they need to serve their communities.
      </p>
    </div>
  </div>
);

export default HeroSection;
