import React, { useState,useEffect } from 'react';
import userSerive from '../service/userSerive';

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

function ThemLich() {
    const [form] = Form.useForm();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        try {
            const response = await userSerive.getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   userSerive.getUsers()
    //     .then((response) => {
    //       setUsers(response.data);
    //     })
    //     .catch((error) => {
          
    //     });
    // }, [])

    const onFinish = async (values) => {
        try {
            await userSerive.createUser(values);
           
            form.resetFields();
            loadUsers();
        } catch (error) {
            console.error("Error registering user:", error);
            alert("User registration failed.");
        }
    };
  return (
    <Form
    form={form}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      
      <Form.Item label="Tiêu đề">
        <Input name="diaDiem" />
      </Form.Item>
      <Form.Item label="Nhân viên">
        <Select>
          <Select.Option name="nhanvienID" value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
     
      
     
      
     
  
      <Form.Item label="Button">
      <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
};
export default ThemLich;