import React from "react";
import quote from "../../../assets/quote.svg";
import people1 from "../../../assets/images/people1.jpeg";
import people2 from "../../../assets/images/people2.jpeg";
import people3 from "../../../assets/images/people3.jpeg";
import SingleReview from "./SingleReview";
import Image from "next/image";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between my-28">
        <div className="mx-auto my-auto">
          <p className="text-4xl font-bold text-center text-blue-950 pt-8">
            Testimonials
          </p>
        </div>
        <div className="w-24 lg:w-48 h-16">
          <Image src={quote} alt="" />
        </div>
      </div>
      <div className="mb-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
