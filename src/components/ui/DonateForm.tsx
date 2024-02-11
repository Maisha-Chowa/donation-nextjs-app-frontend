"use client";
import React from "react";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { TAddDonationFormValues } from "@/components/ui/AddDonationForm";
import { updateDonation } from "@/utils/actions/crud-donation";
import { TParams } from "@/app/(rootLayout)/donations/[donationId]/page";

// export type TDonationValues = {
//   collectedAmount: string;
//   donators: string[];
// };
const DonateForm = ({ info }: { info: TParams }) => {
  const [form] = Form.useForm();
  console.log(info);
  const onFinish = async (values: any) => {
    console.log("expected amount", values.amount);

    const data: Partial<TAddDonationFormValues> = {
      collectedAmount: values.amount,
      donators: [info?.userEmail],
    };
    console.log("from donateForm", data);
    const res = await updateDonation(info.donationId, data);
    if (res.success) {
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
          className="text-black border-double border-4 border-sky-500"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Donate Now
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DonateForm;
