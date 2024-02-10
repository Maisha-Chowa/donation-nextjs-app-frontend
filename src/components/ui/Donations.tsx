import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.png";
export type TDonation = {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  amount: number;
};

const Donations = ({ donations }: { donations: TDonation[] }) => {
  return (
    <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
      {donations?.map((donation: TDonation) => (
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
          <Link
            href={`/donation/${donation._id}`}
            className="mt-4 w-full text-right"
          >
            <Button type="primary">Donate Now</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Donations;
