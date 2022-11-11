import { FC } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Typography } from 'antd';
import companyImage from '../../../assets/images/azerion.png';
import './Login.css';

const { Text } = Typography;

const Login: FC = () => {
  const handleLogin = (values: any) => {
    console.log('Success:', values);
  }

  return (
    <div className='main-container'>
      <div className="login-container">
        <div className="company-image-container">
          <img className="company-image" src={companyImage} alt="azerion" />
        </div>

        <div className="login-text-container">
          <Text className="login-title">Login</Text>
          <Text className="login-subtitle">Sign In to your account</Text>
        </div>

        <Form
          name="normal_login"
          className="login-form"
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your Email!', type: 'email' }]}
            className="mb-4"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon login-icon" />}
              placeholder="Email"
              className="login-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon login-icon" />}
              type="password"
              placeholder="Password"
              className="login-input"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button type="primary" htmlType="submit" className="login-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;