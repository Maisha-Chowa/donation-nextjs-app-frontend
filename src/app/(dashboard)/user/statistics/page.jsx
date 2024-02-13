import PieChartComponent from "@/components/ui/PieChartComponent";
import { getUserByEmail } from "@/utils/actions/create-user";
import { getAllDonationByID } from "@/utils/actions/crud-donation";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const Statistics = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.email);
  const userIfo = await getUserByEmail(user?.email);
  const { donatedAmount, donations } = userIfo?.data[0];
  console.log(donatedAmount, donations[0]);
  const donationId = donations[0];
  const donationInfo = await getAllDonationByID(donationId);
  const { amount, collectedAmount } = donationInfo?.data;
  console.log(amount, collectedAmount);
  const data = {
    donatedAmount: donatedAmount,
    amount: amount,
    collectedAmount: collectedAmount,
  };

  return <PieChartComponent data={data}></PieChartComponent>;
};
export default Statistics;
