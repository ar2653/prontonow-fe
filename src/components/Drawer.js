import React from 'react';
import { Drawer, Typography, Divider, Timeline} from 'antd';

const { Text, Title } = Typography;

const items = [
    { children: 'Create a services site 2015-09-01', color: 'red'},
    { children: 'Solve initial network problems 2015-09-01', color: 'green'},
    { children: 'Technical testing 2015-09-01', color: 'green'},
];

const DeviceDrawer = ({ isOpen, onClose, device }) => {

  return (
<Drawer
      title="Device Details"
      placement="right"
      closable={false}
      onClose={onClose}
      open={isOpen}
      width={500}
    >
      <div style={{ marginBottom: 20 }}>
        <Text strong>Device Name:</Text>
        <Text>{device?.name}</Text>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Text strong>Serial Number:</Text>
        <Text>{device?.serialNumber}</Text>
      </div>
      <Divider />
      <Title level={4}>Service History</Title>
      <Timeline items={items}></Timeline>
    </Drawer>
  );
};

export default DeviceDrawer;
