import Image from "next/image";
import React from "react";

const SingleReview = ({ review }: any) => {
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
      </div>
      <div className="flex py-8">
        <div className="avatar px-8">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={review.img} width={100} height={100} alt="" />
          </div>
        </div>
        <div>
          <h2 className="card-title text-blue-950">{review.name}</h2>
          <p className="text-blue-950">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
