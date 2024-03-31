"use client";
import Image from "next/image";
import people1 from "../../assets/images/people1.jpeg";
import people2 from "../../assets/images/people2.jpeg";
import people3 from "../../assets/images/people3.jpeg";
import people4 from "../../assets/images/people6.png";
const FounderPeople = () => {
  return (
    <>
      <div className="lg:hidden mx-auto my-12">
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people1} width={200} height={150} alt="" />
              <p className="text-blue-950 font-bold text-2xl">EURA BOUGH</p>
              <p className="text-amber-400 font-bold text-2xl">Founder</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people2} width={200} height={150} alt="" />
              <p className="text-blue-950 font-bold text-2xl">SAMATHA ARENT</p>
              <p className="text-amber-400 font-bold text-2xl">Co-Founder</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people3} width={200} height={150} alt="" />
              <p className="text-blue-950 font-bold text-2xl">MELISSA KOGA</p>
              <p className="text-amber-400 font-bold text-2xl">Organiser</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people4} width={200} height={150} alt="" />
              <p className="text-amber-400 font-bold text-2xl">Arvind Malay</p>
              <p className="text-amber-400 font-bold text-2xl">Event Manager</p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div className="mx-auto my-24 hidden lg:block">
        <ul className="timeline">
          <li>
            <div className="timeline-start timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people1} width={250} height={200} alt="" />
              <p className="text-blue-950 font-bold text-2xl">EURA BOUGH</p>
              <p className="text-amber-400 font-bold text-2xl">Founder</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people2} width={250} height={200} alt="" />
              <p className="text-blue-950 font-bold text-2xl">SAMATHA ARENT</p>
              <p className="text-amber-400 font-bold text-2xl">Co-Founder</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people3} width={250} height={200} alt="" />
              <p className="text-blue-950 font-bold text-2xl">MELISSA KOGA</p>
              <p className="text-amber-400 font-bold text-2xl">Organiser</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box border-solid border-blue-950 rounded space-x-6 space-y-4">
              <Image src={people4} width={250} height={200} alt="" />
              <p className="text-amber-400 font-bold text-2xl">Arvind Malay</p>
              <p className="text-amber-400 font-bold text-2xl">Event Manager</p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FounderPeople;
