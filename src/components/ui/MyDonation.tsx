import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.png";
import { getAllDonationByID } from "@/utils/actions/crud-donation";
export type TDonation = {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  amount: string;
  collectedAmount: string;
  endDate: string;
  donators: string[];
};

const MyDonation = async (dontionId : string) => {
  console.log(dontionId);
  const data = await getAllDonationByID(dontionId);
  const donation = data;
  console.log(donation);
  return (
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
        <h1 className="text-2xl font-semibold">Title: {donation?.title}</h1>
        <p className="my-3">Description:{donation?.description}</p>
        <p>
          <span className="font-semibold">Amount:</span> {donation?.amount}
        </p>
        <p>
          <span className="font-semibold">Collected Amount:</span>{" "}
          {donation?.collectedAmount}
        </p>
        <p className="my-3">
          {" "}
          <span className="font-semibold">Category:</span> {donation?.category}
        </p>
      </div>
    </div>
  );
};

export default MyDonation;
