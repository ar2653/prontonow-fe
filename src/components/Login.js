import React from 'react';
import { Form, Input, Button, Typography, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      const response = await axios.post('http://44.198.208.75/login', {
        email: values.email,
        password: values.password,
      });
      if(response.data) {
        const userObject = {isLoggedId: true, user_id: response.data.user_id};
        localStorage.setItem('userdetails', JSON.stringify(userObject))
      }
      console.log('User logged in successfully:', response.data);
      navigate('/devices')
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div
    className='landing-page-form'
    >
      <div
      className='landing-page-card'
      >
        <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
              <Button type="link" block onClick={() => console.log('Forgot password clicked')}>
                Forgot Password?
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
