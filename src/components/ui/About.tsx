"use client";
import Image from "next/image";

import people5 from "../../assets/images/people5.png";
import PeopleCarousel from "./PeopleCarousel";
const About = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-950 font-bold my-8 mx-auto text-center">
        {" "}
        About Us
      </h1>
      <div className="grid grid-col-1  gap-4 lg:grid-cols-3 mx-20">
        <div className="md:col-span-1 lg:col-span-2 card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image src={people5} width={500} height={500} alt="" />
          </figure>
          <div className="card-body items-center text-center flex flex-row">
            <div>
              <h2 className="card-title">Mission</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div>
              <h2 className="card-title">Vision</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div className="">
          <PeopleCarousel />
        </div>
      </div>
    </>
  );
};

export default About;
