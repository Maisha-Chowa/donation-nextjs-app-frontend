import { getAllDonations } from "@/utils/getAllDonations";
import Donation from "./Donation";

const FeaturedDonation = async () => {
  const data = await getAllDonations();
  console.log(data?.data);

  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-6xl">
          <span className="text-pink-900">Donations</span> that we provide.
        </h1>
        <p className="text-center text-lg mt-10">
          Next Donation connects nonprofits, donors, and companies in nearly
          <br />
          every country in the world. We help fellow nonprofits access the
          <br />
          funding, tools, training, and support they need to serve their
          communities.
        </p>
      </div>
      <Donation donations={data?.data?.slice(0, 3)} />
    </div>
  );
};

export default FeaturedDonation;
