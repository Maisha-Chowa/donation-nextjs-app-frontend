"use client";
import Image from "next/image";

import people5 from "../../assets/images/people5.png";
import PeopleCarousel from "./PeopleCarousel";
import VolunteerCarousel from "./volunteer/VolunteerCarousel";
const About = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-950 font-bold my-12 mx-auto text-center">
        {" "}
        About Us
      </h1>
      <div className="mx-20">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image src={people5} width={800} height={500} alt="" />
          </figure>
          <div className="card-body flex flex-col lg:flex-row bg-blue-950">
            <div className="p-4 border-solid border-amber-300 rounded">
              <h2 className="card-title text-amber-400 font-bold text-2xl">
                Mission
              </h2>
              <p className=" text-amber-400 font-bold text-1xl">
                Our Mission: Empowering Change Through Your Generosity
              </p>
              <p className="text-white text-lg text-start">
                At Next Donation, we believe in the power of collective action.
                Our mission is to empower positive change by connecting
                passionate individuals with critical causes. Through secure and
                transparent donations, we aim to fuel progress and build a
                brighter future for all.
                <br />
                We focus on, where even small contributions can create a
                significant impact. We partner with reputable organizations
                working tirelessly to address these challenges, ensuring your
                donations reach those who need them most.
                <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  {" "}
                  Our core values guide our mission:{" "}
                </span>{" "}
                <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Transparency:{" "}
                </span>{" "}
                We believe in complete openness about how donations are used.{" "}
                <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Impact:
                </span>
                We strive to maximize the impact of every contribution. <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Community:
                </span>{" "}
                We foster a supportive community of donors who share a passion
                for making a difference. <br />
                By donating through our platform, you become an active
                participant in creating positive change. Together, we can build
                a more compassionate and equitable world. Join us today and make
                a lasting impact!
              </p>
            </div>
            <div className="p-4 border-solid border-amber-300 rounded">
              <h2 className="card-title text-amber-400 font-bold text-2xl">
                Vision
              </h2>
              <p className="text-amber-400 font-bold text-1xl">
                Our Vision: A World Transformed by Generosity
              </p>
              <p className="text-white text-lg text-start">
                Next Donations envisions a world where every individual has the
                opportunity to thrive. We see a future where generosity is a
                driving force for positive change, empowering communities and
                tackling the worlds most pressing challenges.
                <br /> Through our innovative donation platform, we aspire to
                become the leading hub for impactful giving. We envision a
                seamless and secure experience that allows everyone, regardless
                of location or resources, to contribute to causes they care
                about. <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Our vision is built on these key pillars:
                </span>{" "}
                <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Democratized Giving:
                </span>
                We believe everyone deserves the power to make a difference. Our
                goal is to break down barriers and make giving accessible for
                all. <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  Amplified Impact:
                </span>
                We envision a future where donations are maximized for impact.
                We aim to connect donors directly with the most effective
                solutions and track progress transparently.
                <br />
                <span className=" text-amber-400 font-bold text-1xl">
                  {" "}
                  A Ripple Effect of Change:
                </span>{" "}
                We see a world where acts of generosity inspire others, creating
                a ripple effect of positive transformation that reaches far and
                wide. <br />
                By realizing this vision, we hope to build a future where
                generosity becomes the norm, leaving a lasting legacy of hope
                and progress for generations to come.
              </p>
            </div>
          </div>
        </div>

        <PeopleCarousel />
        <VolunteerCarousel />
      </div>
    </>
  );
};

export default About;
