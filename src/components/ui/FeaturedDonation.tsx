import { getAllServices } from "@/utils/getAllDonations";
import Donations from "./Donations";

const FeaturedDonation = async () => {
  const data = await getAllServices();
  console.log(data?.data);

  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-6xl">
          <span className="text-blue-500">Services</span> that we provide.
        </h1>
        <p className="text-center text-lg mt-10">
          We provide various computer repair services and solutions for our new
          and regular customers. <br /> Feel free to find out more below.
        </p>
      </div>
      <Donations donations={data?.data?.slice(0, 3)} />
    </div>
  );
};

export default FeaturedDonation;
