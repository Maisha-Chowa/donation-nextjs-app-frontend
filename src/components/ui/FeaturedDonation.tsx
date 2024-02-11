import { getAllDonations } from "@/utils/getAllDonations";
import Donation from "./Donation";

const FeaturedDonation = async () => {
  const data = await getAllDonations();
  console.log(data?.data);

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
      <Donation donations={data?.data?.slice(0, 3)} />
    </div>
  );
};

export default FeaturedDonation;
