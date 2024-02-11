import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import DonateForm from "@/components/ui/DonateForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export type TParams = {
  donationId: string;
  userEmail: string;
};
const DonationDatails = async ({ params }: { params: TParams }) => {
  const donationId = params.donationId;
  console.log(donationId);

  const session = await getServerSession(authOptions);
  console.log(session?.user);
  const userEmail = session?.user?.email;
  console.log(userEmail);

  const info = {
    donationId: donationId,
    userEmail: userEmail,
  };

  const res = await fetch(
    `http://localhost:5000/api/v1/donation/${donationId}`
  );
  const data = await res.json();
  console.log(data.data);
  const donation = data?.data;

  return (
    <>
      <div className="p-10 w-[80%] mx-auto">
        <div
          key={donation._id}
          className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
        >
          <Image
            className="drop-shadow-2xl h-[30%] w-[100%]"
            src={banner}
            alt=""
          />
          <h1 className="text-2xl font-semibold">{donation?.title}</h1>
          <p className="my-3">{donation?.description}</p>
          <p>
            <span className="font-semibold">Price:</span> {donation?.amount}
          </p>
          <p className="my-3">
            {" "}
            <span className="font-semibold">Category:</span>{" "}
            {donation?.category}
          </p>
          <DonateForm info={info} />
        </div>
      </div>
    </>
  );
};

export default DonationDatails;
