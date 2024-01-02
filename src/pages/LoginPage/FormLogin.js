import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import { https } from '../../service/Api';

const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        //chuyen huong user ve home sau khi dang nhap thanh cong
        navigate("/");
        // day data len redux
        dispatch(setUser(res.data.content));
        let dataJson = JSON.stringify(res.data.content)
        localStorage.setItem("USER_INFOR", dataJson)
        message.success("Login success");
      })
      .catch((err) => {
        console.log(err);
        message.error("Login fail");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      layout='vertical'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item

        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Button className='bg-orange-600' htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>);
};

export default FormLogin;