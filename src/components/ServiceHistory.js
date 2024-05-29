import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Divider, Typography } from 'antd';

const { Title } = Typography;
const ServiceHistory = () => {
  const { id } = useParams();

  const serviceHistory = [
    {
      date: '12/23/2023',
      partsReplaced: 'laser, some sample part names',
      deviceName: 'something',
      serialNumber: id,
      configuration: 'some config',
    },
    {
      date: '10/13/2023',
      partsReplaced: 'laser, some sample part names',
      deviceName: 'something',
      serialNumber: id,
      configuration: 'some config',
    },
    {
      date: '5/23/2023',
      partsReplaced: 'laser, some sample part names',
      deviceName: 'something',
      serialNumber: id,
      configuration: 'some config',
    },
    {
      date: '10/12/2021',
      partsReplaced: 'laser, some sample part names',
      deviceName: 'something',
      serialNumber: id,
      configuration: 'some config',
    },
  ];

  return (
    <>
    <div style={{ padding: "24px 16px" }}>
        <Title level={2}>Service history</Title>
      </div>
      {serviceHistory.map((event, index) => (
        <>
        <Descriptions
          key={index}
          bordered
          column={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
        >
          <Descriptions.Item label="Date">{event.date}</Descriptions.Item>
          <Descriptions.Item label="Parts Replaced">{event.partsReplaced}</Descriptions.Item>
          <Descriptions.Item label="Device Name">{event.deviceName}</Descriptions.Item>
          <Descriptions.Item label="Serial Number">{event.serialNumber}</Descriptions.Item>
          <Descriptions.Item label="Configuration">{event.configuration}</Descriptions.Item>
        </Descriptions>
        <Divider/>
        </>
      ))}
    </>
  );
};

export default ServiceHistory;
