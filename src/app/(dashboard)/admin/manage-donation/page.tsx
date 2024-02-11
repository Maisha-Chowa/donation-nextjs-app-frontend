import ManageDonationTable from "@/components/ui/ManageDonationTable";
import { getAllDonations } from "@/utils/getAllDonations";


const ManageDonationPage = async () => {
  const { data } = await getAllDonations();
  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <ManageDonationTable donations={data} />
    </div>
  );
};

export default ManageDonationPage;
