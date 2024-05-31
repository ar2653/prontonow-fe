/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Table, Button, Typography } from "antd";
import { FaEdit, FaTrash, FaRegEye } from "react-icons/fa";
import DeviceDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const { Title } = Typography;

const Devices = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState({});
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem('userdetails')).user_id;

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(`https://18.216.213.221/devices?user_id=${userId}`);
        setDevices(response.data.data.devices);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, [userId]);

  const handleDrawer = (device) => {
    setSelectedDevice(device);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const showDeviceDetails = (device) => {
    console.log(device);
    navigate(`/devices/model/${device.model}/serialnumber/${device.serialNumber}`)
  }
  

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
      render: (_, record) => <a onClick={() => showDeviceDetails(record)}>{record.name}</a>,
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    // {
    //   title: "Request Service",
    //   dataIndex: "requestService",
    //   key: "requestService",
    //   render: () => (
    //     <div style={{ display: "flex", gap: "8px" }}>
    //       <Button icon={<FaImage />} size="small" />
    //       <Button icon={<FaComment />} size="small" />
    //       <Button type="primary" size="small">
    //         Request
    //       </Button>
    //     </div>
    //   ),
    // },
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

  const data = devices.map((device, index) => ({
    key: device.device_id,
    index: index + 1,
    name: device.name,
    serialNumber: device.serial_number,
    model: device.model,
    make: device.make,
  }));

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
