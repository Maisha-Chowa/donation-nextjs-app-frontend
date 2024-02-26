import PieChartComponent from "@/components/ui/PieChartComponent";
import { getUserByEmail } from "@/utils/actions/create-user";
import { getAllDonationByID } from "@/utils/actions/crud-donation";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

// export type TStatisticsData = {
//   donatedAmount: string;
//   amount: string;
//   collectedAmount: string;
// };
const Statistics = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.email);
  const userIfo = await getUserByEmail(user?.email);
  const { donatedAmount, donations } = userIfo?.data[0];
  console.log(donatedAmount, donations);
  let donationId;
  let StatisticsData = [];
  for (let i = 0; i < donations.length; i++) {
    donationId = donations[i];
    const donationInfo = await getAllDonationByID(donationId);
    const { amount, collectedAmount, donators } = donationInfo?.data;
    console.log(amount, collectedAmount, donators);

    const isExist = donators.findIndex(
      (donator) => donator.email === user?.email
    );
    console.log(isExist);
    let DonatedAmount;
    if (isExist !== -1) {
      DonatedAmount = donators[isExist].donatedAmount;
      console.log(DonatedAmount);
      const data = {
        donatedAmount: DonatedAmount,
        amount: amount,
        collectedAmount: collectedAmount,
      };
      StatisticsData.push(data);
    }
  }
  console.log(StatisticsData);

  return (
    <div className="col-span-9 grid grid-cols-2 gap-5 p-10 w-[80%] mx-auto">
      {StatisticsData?.map((data) => (
        // eslint-disable-next-line react/jsx-key
        <PieChartComponent data={data}></PieChartComponent>
      ))}
    </div>
  );
};
export default Statistics;
