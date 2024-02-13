"use client";

import {
  createDonation,
  getAllDonationByID,
  updateDonation,
} from "@/utils/actions/crud-donation";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import { TAddDonationFormValues } from "./AddDonationForm";
// import { TId } from "@/app/(dashboard)/admin/edit-donation/page";

const EditDonationForm = ({
  donation,
}: {
  donation: TAddDonationFormValues;
}) => {
  const [form] = Form.useForm();

  console.log(donation);
  const id = donation?._id;

  const onFinish = async (values: Partial<TAddDonationFormValues>) => {
    const res = await updateDonation(id, values);
    if (res.success) {
      message.success("Donation updated successfully");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="max-w-xl shadow-xl bg-white mx-auto">
        <h1 className="text-center text-xl py-6 bg-gray-300">
          Edit Donation Information
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
          >
            <Input
              type="text"
              size="large"
              className="text-black"
              defaultValue={donation?.title}
            />
          </Form.Item>
          <Form.Item
            label="Edit Image"
            name="image"
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input
              type="text"
              size="large"
              className="text-black"
              defaultValue={donation?.category}
            />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea
              rows={4}
              className="text-black"
              defaultValue={donation?.description}
            />
          </Form.Item>
          <Form.Item label="Amount" name="amount">
            <Input
              type="text"
              size="large"
              className="text-black"
              defaultValue={donation?.amount}
            />
          </Form.Item>
          <Form.Item label="End Date" name="endDate">
            <Input
              type="text"
              size="large"
              className="text-black"
              defaultValue={donation?.endDate}
            />
          </Form.Item>

          <Form.Item>
            <Button type="default" className="text-white bg-pink-900" htmlType="submit" block size="large">
              Update Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditDonationForm;
