import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const RequestService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Request Service</Title>
      <Form
        name="request_service"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ deviceId: id }}
      >
        <Form.Item label="Device ID" name="deviceId">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter a description' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Comment"
          name="comment"
          rules={[{ required: true, message: 'Please enter a comment' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload Images" name="upload">
          <Upload name="images" listType="picture" maxCount={5}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
            Request
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RequestService;
