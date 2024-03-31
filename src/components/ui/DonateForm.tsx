"use client";
import React from "react";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { TAddDonationFormValues } from "@/components/ui/AddDonationForm";
import {
  findDonationInfo,
  getAllDonationByID,
  updateDonation,
} from "@/utils/actions/crud-donation";
import { TParams } from "@/app/(rootLayout)/donations/[donationId]/page";
import { getUserByEmail, updateUserInfo } from "@/utils/actions/create-user";

const DonateForm = ({ info }: { info: TParams }) => {
  const [form] = Form.useForm();
  //console.log(info);

  const onFinish = async (values: any) => {
    console.log("expected amount", values.amount);

    const donationInfo = await getAllDonationByID(info.donationId);
    // console.log(donationInfo.data);
    // console.log(donationInfo.data.collectedAmount);
    const newCollectedAmount =
      parseInt(donationInfo.data.collectedAmount) + parseInt(values.amount);

    let donators = donationInfo?.data?.donators;
    console.log(donators);

    const isExist = donators.findIndex(
      (donator: { email: string }) => donator.email === info?.userEmail
    );
    console.log(isExist);
    if (isExist !== -1) {
      const newDonatedAmount =
        parseInt(donators[isExist].donatedAmount) + parseInt(values.amount);
      console.log(newCollectedAmount);
      donators[isExist].donatedAmount = newDonatedAmount.toString();
    } else {
      const donatorInfo = {
        email: info?.userEmail,
        donatedAmount: values.amount,
      };
      donators.push(donatorInfo);
    }

    console.log(donators);

    const data: Partial<TAddDonationFormValues> = {
      collectedAmount: newCollectedAmount.toString(),
      donators: donators,
    };
    console.log(data);

    const res = await updateDonation(info.donationId, data);
    console.log(res);
    if (res.success) {
      const userInfo = await getUserByEmail(info?.userEmail);
      console.log(userInfo.data);
      const id = userInfo?.data[0]._id;
      const donatedAmount = userInfo?.data[0].donatedAmount;
      const prevAmount = parseInt(donatedAmount);
      const newAmount = prevAmount + parseInt(values.amount);
      console.log(id);
      console.log(info.donationId);

      let donations = userInfo?.data[0].donations;
      donations.push(info.donationId);
      console.log(donations);
      const data = {
        donatedAmount: newAmount.toString(),
        donations: donations,
      };
      const updateInfo = await updateUserInfo(id, data);
      console.log(updateInfo);
      message.success("Donate successfully");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="p-5"
      form={form}
    >
      <Form.Item
        name="amount"
        rules={[{ required: true, message: "Please input donation title!" }]}
      >
        <Input
          type="text"
          placeholder="amount"
          size="large"
          className="text-black border-double border-4 border-blue-950"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="default"
          className="text-white bg-blue-950"
          htmlType="submit"
          block
          size="large"
        >
          Donate Now
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DonateForm;
