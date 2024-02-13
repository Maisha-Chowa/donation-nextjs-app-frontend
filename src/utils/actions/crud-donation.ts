"use server";

import { TAddDonationFormValues } from "@/components/ui/AddDonationForm";
import { error } from "console";
import Error from "next/error";

export const createDonation = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const donationInfo = await res.json();
  console.log(donationInfo);
  return donationInfo;
};

export const updateDonation = async (
  id: string,
  data: Partial<TAddDonationFormValues>
) => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const donationInfo = await res.json();
  console.log(donationInfo);
  return donationInfo;
};

export const getAllDonations = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation`, {
    method: "GET",
    // cache: "no-cache",
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};
export const getAllDonationByID = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/donation/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
};

export const findDonationInfo = async ({ key }: any, { value }: any) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/donation/${(key = value)}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  return res.json();
};

export const deleteDonation = async (id: string) => {
  console.log(id);
  const res = await fetch(
    `${process.env.BACKEND_URL}/donation/${id}`,

    {
      method: "DELETE",
      cache: "no-cache",
    }
  );
};
