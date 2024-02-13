import Donation from "@/components/ui/Donation";
import MyDonation from "@/components/ui/MyDonation";
import { getUserByEmail } from "@/utils/actions/create-user";
import { authOptions } from "@/utils/authOptions";
import { getAllDonations } from "@/utils/getAllDonations";
import { getServerSession } from "next-auth";

const MyDonationPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.email);
  const userIfo = await getUserByEmail(user?.email);
  const dontionsId = userIfo?.data[0]?.donations;
  console.log(dontionsId);
  return <MyDonation dontionsId={dontionsId}></MyDonation>;
};

export default MyDonationPage;
