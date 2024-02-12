import React from "react";
import Donation from "@/components/ui/Donation";

const Donations = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-6xl">
          <span className="text-blue-500">Donations</span> that we provide.
        </h1>
        <p className="text-center text-lg mt-10">
          We provide various computer repair services and solutions for our new
          and regular customers. <br /> Feel free to find out more below.
        </p>
      </div>
      <Donation donations={data?.data} />
    </div>
  );
};

export default Donations;
