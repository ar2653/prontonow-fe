import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Divider, Typography, Table } from 'antd';

const { Title } = Typography;

const ServiceHistory = () => {
  const { id } = useParams();

  const serviceHistory = [
    {
      date: '9/1/2023',
      make: 'Lumenis',
      model: 'UltraPulse Encore',
      serialNumber: '008-41198',
      dateOfManufacture: 'Sep-05',
      softwareRev: '4.20.000.14',
      activeFX: 'Enabled',
      totalFX: 'Enabled',
      comments: 'Started unit, error 23 and 81 displayed. Tube alarms: Reflected power RF duty cycle VSWR.',
    },
  ];

  const calibrationColumns = [
    {
      title: 'Setting (Watts)',
      dataIndex: 'setting',
      key: 'setting',
    },
    {
      title: 'Measured CW',
      dataIndex: 'measuredCW',
      key: 'measuredCW',
    },
    {
      title: 'Transmission',
      dataIndex: 'transmission',
      key: 'transmission',
    },
    {
      title: 'Measured UltraPulse (150mJ)',
      dataIndex: 'measuredUltraPulse',
      key: 'measuredUltraPulse',
    },
    {
      title: 'Transmission2',
      dataIndex: 'transmission2',
      key: 'transmission2',
    },
    {
      title: 'System Checks',
      dataIndex: 'systemChecks',
      key: 'systemChecks',
    },
  ];

  const calibrationData = [
    {
      key: '1',
      setting: '1',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Arm Alignment NA',
    },
    {
      key: '2',
      setting: '5',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Near/Far Alignment NA',
    },
    {
      key: '3',
      setting: '10',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Emergency Off Switch Pass',
    },
    {
      key: '4',
      setting: '20',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Remote Interlock Pass',
    },
    {
      key: '5',
      setting: '30',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Footswitch Pass',
    },
    {
      key: '6',
      setting: '40',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Cooling system Pass',
    },
    {
      key: '7',
      setting: '50',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'Touchscreen Pass',
    },
    {
      key: '8',
      setting: '60',
      measuredCW: '-',
      transmission: '0.0%',
      measuredUltraPulse: '-',
      transmission2: '0.0%',
      systemChecks: 'G100 Test',
    },
  ];

  return (
    <>
      <div style={{ padding: "24px 16px" }}>
        <Title level={2}>Service History</Title>
      </div>
      {serviceHistory.map((event, index) => (
        <div key={index}>
          <Descriptions
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
            <Descriptions.Item label="Date of Service">{event.date}</Descriptions.Item>
            <Descriptions.Item label="Make">{event.make}</Descriptions.Item>
            <Descriptions.Item label="Model">{event.model}</Descriptions.Item>
            <Descriptions.Item label="Serial Number">{event.serialNumber}</Descriptions.Item>
            <Descriptions.Item label="Date of Manufacture">{event.dateOfManufacture}</Descriptions.Item>
            <Descriptions.Item label="Software Rev">{event.softwareRev}</Descriptions.Item>
            <Descriptions.Item label="ActiveFX">{event.activeFX}</Descriptions.Item>
            <Descriptions.Item label="TotalFX">{event.totalFX}</Descriptions.Item>
            <Descriptions.Item label="Comments" span={3}>
              {event.comments}
            </Descriptions.Item>
            <Descriptions.Item label="Calibration & System Checks" span={3}>
              <Table
                columns={calibrationColumns}
                dataSource={calibrationData}
                pagination={false}
                bordered
                size="small"
                scroll={{ x: 'max-content' }}
              />
            </Descriptions.Item>
          </Descriptions>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default ServiceHistory;
