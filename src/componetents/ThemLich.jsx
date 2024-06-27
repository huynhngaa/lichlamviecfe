import React, { useState, useEffect } from 'react';
import {
  Modal,
  Form,
  Input,
  Select,
  notification
} from 'antd';
 import userSerive from '../service/userSerive';

const ThemLich = ({ visible, onClose,refreshUsers}) => {
   const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [api, contextHolder] = notification.useNotification();

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

  const onFinish = async (values) => {
    try {
      await userSerive.createUser(values);
      form.resetFields();
      api.success({
        message: 'Success',
        description: 'User created successfully!',
        showProgress: true,
      });
      refreshUsers();
    } catch (error) {
      api.error({
        message: 'Error',
        description: 'Failed to create user!',
        showProgress: true,
      });
    }
   };

  return (
    <Modal
   
    visible ={visible}
      title="Thêm lịch"
     
      onCancel={onClose}
      onOk={() => {
        form.validateFields().then(values => {
          onFinish(values);
        }).catch(info => {
          console.log('Validate Failed:', info);
        });
      }}
    >
    
         {contextHolder}
       <Form
         form={form}
         onFinish={onFinish}
        
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
         layout="horizontal"
       >
           <Form.Item
           label="Loại công việc"
           name="loaiCvID"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa điểm"
          name="diaDiem"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="noiDung"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
           label="Ghi chú"
           name="ghiChu"
           rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nhân viên"
          name="nguoiDungID"
           rules={[{ required: true, message: 'Please select an employee!' }]}
         >
           <Select>
             {users.map(user => (
               <Select.Option key={user.id} value={user.id}>
                 {user.id}
               </Select.Option>
            ))}
          </Select>
        </Form.Item>
       
       </Form>
    </Modal>
  );
};

export default ThemLich;
