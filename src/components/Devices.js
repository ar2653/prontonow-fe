/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Table, Button, Typography } from "antd";
import { FaComment, FaImage, FaEdit, FaTrash, FaRegEye } from "react-icons/fa";
import DeviceDrawer from "./Drawer";

const { Title } = Typography;

const Devices = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState({});

  const handleDrawer = (device) => {
    setSelectedDevice(device);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Device Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Request Service",
      dataIndex: "requestService",
      key: "requestService",
      render: () => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button icon={<FaImage />} size="small" />
          <Button icon={<FaComment />} size="small" />
          <Button type="primary" size="small">
            Request
          </Button>
        </div>
      ),
    },
    {
      title: "Service History",
      dataIndex: "serviceHistory",
      key: "serviceHistory",
      render: (_, record) => <a onClick={() => handleDrawer(record)}>View</a>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button icon={<FaEdit />} size="small" />
          <Button icon={<FaTrash />} size="small" />
          <Button icon={<FaRegEye />} size="small" />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Sample Device 1",
      serialNumber: "ABCD123456",
    },
    {
      key: "2",
      name: "Sample Device 2",
      serialNumber: "EFGH789012",
    },
    {
      key: "3",
      name: "Sample Device 3",
      serialNumber: "IJKL345678",
    },
  ];

  return (
    <div className="">
      <div style={{ padding: "24px 16px" }}>
        <Title level={2}>Devices</Title>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ width: "100%" }}
      />
      <DeviceDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        device={selectedDevice}
      />
    </div>
  );
};

export default Devices;
