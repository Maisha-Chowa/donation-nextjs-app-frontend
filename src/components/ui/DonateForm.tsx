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

// export type TDonationValues = {
//   collectedAmount: string;
//   donators: string[];
// };
const DonateForm = ({ info }: { info: TParams }) => {
  const [form] = Form.useForm();
  //console.log(info);

  const onFinish = async (values: any) => {
    console.log("expected amount", values.amount);

    const donationInfo = await getAllDonationByID(info.donationId);
    // console.log(donationInfo.data);
    // console.log(donationInfo.data.collectedAmount);
    const prevAmount = parseInt(donationInfo.data.collectedAmount);
    const newAmount = prevAmount + parseInt(values.amount);

    const data: Partial<TAddDonationFormValues> = {
      // collectedAmount: values.amount,
      collectedAmount: newAmount.toString(),
      donators: [info?.userEmail],
    };
    const res = await updateDonation(info.donationId, data);
    if (res.success) {
      const userIfo = await getUserByEmail(info?.userEmail);
      const id = userIfo?.data[0]._id;
      console.log(id);
      console.log(info.donationId);
      const data = {
        donatedAmount: values.amount,
        donations: [info.donationId],
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
          className="text-black border-double border-4 border-pink-500"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="default"
          className="text-white bg-pink-900"
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
