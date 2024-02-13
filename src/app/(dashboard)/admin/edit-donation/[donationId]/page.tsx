import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import DonateForm from "@/components/ui/DonateForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { TAddDonationFormValues } from "@/components/ui/AddDonationForm";
import { getAllDonationByID } from "@/utils/actions/crud-donation";
import EditDonationForm from "@/components/ui/EditDonationForm";

export type TParams = {
  donationId: string;
  userEmail: string;
};
const EditDonation = async ({ params }: { params: TParams }) => {
  const donationId = params?.donationId;
  console.log(donationId);
  const data = await getAllDonationByID(donationId);
  console.log(data.data);
  const donation = data?.data;

  return (
    <EditDonationForm donation={donation}/>
  );
};

export default EditDonation;
