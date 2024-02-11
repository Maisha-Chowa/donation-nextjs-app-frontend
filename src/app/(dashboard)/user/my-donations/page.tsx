import Donation from "@/components/ui/Donation";
import { getAllDonations } from "@/utils/getAllDonations";

const MyDonationPage = async () => {
  const { data } = await getAllDonations();
  return <Donation donations={data.data}></Donation>;
};

export default MyDonationPage;
