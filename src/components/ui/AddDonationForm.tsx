"use client";

import { createDonation } from "@/utils/actions/crud-donation";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

export type TAddDonationFormValues = {
  title: string;
  image: string;
  category: string;
  description: string;
  amount: string;
  collectedAmount: string;
  endDate: string;
  donators: [string];
};

const AddDonationForm = () => {
  // const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = async (values: TAddDonationFormValues) => {
    const res = await createDonation(values);
    if (res.success) {
      message.success("Donation created successfully");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="max-w-xl shadow-xl bg-white mx-auto">
        <h1 className="text-center text-xl py-6 bg-gray-300">
          Add Donation Information
        </h1>
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
            label="Donation Title"
            name="title"
            rules={[
              { required: true, message: "Please input donation title!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input donation image!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              { required: true, message: "Please input donation category!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <TextArea rows={4} className="text-black" />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              { required: true, message: "Please input donation amount!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="endDate"
            rules={[
              { required: true, message: "Please input donation endDate!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Add Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddDonationForm;
