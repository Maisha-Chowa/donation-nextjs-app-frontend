"use client";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { AnyObject } from "antd/es/_util/type";
import { TAddDonationFormValues } from "./AddDonationForm";

const ManageDonationTable = ({
  donations,
}: {
  donations: TAddDonationFormValues[];
}) => {
  const router = useRouter();

  const handleDeleteWithConfirmation = (id: string) => {
    const handleOk = async () => {};

    Modal.confirm({
      title: "Are you sure you want to delete this donation?",
      okText: "Delete",
      okButtonProps: {
        style: {
          backgroundColor: "#FF7875",
          border: "none",
          color: "white",
        },
      },
      onOk: () => handleOk(),
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const columns = [
    {
      title: "No.",
      key: "no",
      render: (text: any, record: AnyObject, index: number) =>
        index + 1 + (currentPage - 1) * pageSize,
    },

    {
      title: "Donation Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (record: AnyObject) => {
        return (
          <div>
            <Button
              className="text-xl"
              type="link"
              onClick={() => router.push(`/admin/edit-service/${record._id}`)}
            >
              <EditOutlined />
            </Button>
            <Button
              className="text-xl"
              type="link"
              danger
              onClick={() => handleDeleteWithConfirmation(record._id)}
            >
              <DeleteFilled />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl ">Manage donations</h1>
        <Button type="link" onClick={() => router.push("/admin/add-donation")}>
          <PlusOutlined /> Add New Donation{" "}
        </Button>
      </div>
      <hr />
      <Table
        onChange={(pagination) => handleTableChange(pagination)}
        className="mt-4"
        dataSource={donations}
        columns={columns}
        scroll={{ x: "100%" }}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
        pagination={{
          pageSize: 5,
          style: {
            backgroundColor: "#ffffff",
            paddingRight: "15px",
          },
        }}
      />
    </div>
  );
};

export default ManageDonationTable;
