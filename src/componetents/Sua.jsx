import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Input,notification } from 'antd';
import userService from '../service/userSerive';

const Sua = ({ visible, onClose, id, refreshUsers }) => {
  const [form] = Form.useForm();
  const [confirmLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (id) {
      userService.getUserById(id).then(res => {
        form.setFieldsValue(res.data);

      });
    }
    userService.getUsers().then(res => {
      setUsers(res.data);
    });
  }, [id]);

  const handleOk = () => {
    try {
      form
      .validateFields()
      .then(values => {
       
        userService.updateUser(values,id).then(() => {
        
          api.success({
            message: 'Success',
            description: 'User edit successfully!',
            showProgress: true,
          });
          onClose();
          refreshUsers();
        });
      })
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
      title="Sửa lịch"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={onClose}
    >
      {contextHolder}
      <Form form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} layout="horizontal">
        <Form.Item label="Loại công việc" name="loaiCvID" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Địa điểm" name="diaDiem" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nội dung" name="noiDung" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Ghi chú" name="ghiChu" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nhân viên" name="nguoiDungID" rules={[{ required: true, message: 'Please select an employee!' }]}>
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

export default Sua;
