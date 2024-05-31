/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Descriptions, Badge, Typography } from "antd";

const { Title } = Typography;

const DeviceDetails = () => {
  const { model_name, serial_number } = useParams();

  const navigate = useNavigate();

  const handleServiceHistoryClick = () => {
    navigate(`/devices/model/${model_name}/serialNumber/${serial_number}/history`);
  };

  const handleRequestServiceClick = () => {
    navigate(`/devices/model/${model_name}/serialNumber/${serial_number}/requestservice`);
  };


  // Define device details
  const deviceDetails = [
    {
      key: "1",
      label: "Make",
      children: "Lumenis",
    },
    {
      key: "2",
      label: "Model",
      children: "UltraPulse Encore",
    },
    {
      key: "3",
      label: "Serial Number",
      children: "008-41198",
    },
    {
      key: "4",
      label: "Date of Manufacture",
      children: "Sep-05",
    },
    {
      key: "5",
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
        key: "6",
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