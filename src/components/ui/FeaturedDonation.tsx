import { getAllDonations } from "@/utils/getAllDonations";
import Donation from "./Donation";
import Link from "next/link";

const FeaturedDonation = async () => {
  const data = await getAllDonations();
  console.log(data?.data);

  return (
    <div className="mx-auto my-auto">
      <div className="my-12">
        <h1 className=" mx-auto text-center text-6xl text-blue-950">
          <span className="mx-auto text-amber-400">Donations</span> that we
          provide.
        </h1>
        <p className="mx-8 lg:mx-24 text-center text-lg mt-10 ">
          Next Donation connects nonprofits, donors, and companies in nearly
          every country in the world. We help fellow nonprofits access the
          funding, tools, training, and support they need to serve their
          communities.
        </p>
      </div>
      <Donation donations={data?.data?.slice(0, 3)} />
      <div className="mx-auto my-12 flex flex-col items-center">
        <Link href={`/donations`}>
          <button className=" text-white bg-blue-950 py-8 px-10 rounded text-lg">
            Show All Donation Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDonation;
