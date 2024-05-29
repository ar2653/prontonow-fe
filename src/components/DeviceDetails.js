/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Descriptions, Badge, Typography } from "antd";

const { Title } = Typography;

const DeviceDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleServiceHistoryClick = () => {
    navigate(`/devices/${id}/history`);
  };

  const handleRequestServiceClick = () => {
    navigate(`/devices/${id}/requestservice`);
  };


  // Define device details
  const deviceDetails = [
    {
      key: "1",
      label: "Device ID",
      children: id,
    },
    {
      key: "2",
      label: "Device Name",
      children: "Example Device Name",
    },
    {
      key: "3",
      label: "Status",
      children: <Badge status="processing" text="Active" />,
    },
    {
      key: "4",
      label: "Last Service Date",
      children: "2023-05-24",
    },
    {
      key: "5",
      label: "Next Service Due",
      children: "2024-05-24",
      span: 2,
    },
    {
      key: "6",
      label: "Firmware Version",
      children: "v1.2.3",
    },
    {
      key: "7",
      label: "Battery Level",
      children: "85%",
    },
    {
      key: "8",
      label: "Location",
      children: "Warehouse A",
    },
    {
      key: "9",
      label: "Config Info",
      children: (
        <>
          CPU: ARM Cortex-A53
          <br />
          Memory: 2 GB
          <br />
          Storage: 32 GB
          <br />
          Network: Wi-Fi, Bluetooth
          <br />
        </>
      ),
      span: 3,
    },
    {
      key: "10",
      label: "Service History",
      children: (
        <a
          onClick={handleServiceHistoryClick}
          style={{ cursor: "pointer", color: "#1890ff" }}
        >
          View Service History
        </a>
      ),
    },
    {
        key: "11",
        label: "Request service",
        children: (
          <a
            onClick={handleRequestServiceClick}
            style={{ cursor: "pointer", color: "#1890ff" }}
          >
            Request service
          </a>
        ),
      },
  ];

  return (
    <>
      <div style={{ padding: "24px 16px" }}>
        <Title level={2}>Device Details</Title>
      </div>
      <Descriptions
        column={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        bordered
        items={deviceDetails}
      />
    </>
  );
};

export default DeviceDetails;
