import Donation, { TDonation } from "@/components/ui/Donation";
import MyDonation from "@/components/ui/MyDonation";
import { getUserByEmail } from "@/utils/actions/create-user";
import { getAllDonationByID } from "@/utils/actions/crud-donation";
import { authOptions } from "@/utils/authOptions";
import { getAllDonations } from "@/utils/getAllDonations";
import { getServerSession } from "next-auth";

const MyDonationPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.email);
  const userIfo = await getUserByEmail(user?.email);
  const donationsId = userIfo?.data[0]?.donations;
  console.log(donationsId); //array of donation id
  let MyDonationData: TDonation[] = [];
  let donationId;
  for (let i = 0; i < donationsId.length; i++) {
    donationId = donationsId[i];
    console.log(donationId);
    const data = await getAllDonationByID(donationId);
    console.log(data);
    MyDonationData.push(data?.data);
    console.log(data);
  }
  console.log(MyDonationData);

  return (
    <>
      <Donation donations={MyDonationData} />
    </>
  );
};

export default MyDonationPage;

// {
//   let donationId;
//   for(const i=0; i<donationsId.length();i++){
//     donationId= donationsId[i];
//      <MyDonation donationId={donationId}></MyDonation>
//   }
// }
