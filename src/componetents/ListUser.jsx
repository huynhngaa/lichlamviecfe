import React, { useEffect, useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Layout, theme, Table, Divider, Button, Row, Col, Space, notification } from 'antd';
import userService from '../service/userSerive';
import ThemLich from './ThemLich';
import Sua from './Sua';


const { Content } = Layout;

function ListUser() {
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [api, contextHolder] = notification.useNotification();


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await userService.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await userService.deleteUser(id);
      api.success({
        message: 'Success',
        description: 'User deleted successfully!',
        showProgress: true,
      });
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      api.error({
        message: 'Error',
        description: 'User deletion failed.',
        showProgress: true,
      });
    }
  };

  const handleEditUser = (id) => {
    setSelectedUserId(id);
    setOpen(true);
  };
  const handleAddUser = () => {
   
    setOpen(true);
  };


  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'nguoiDungID',
      key: 'nguoiDungID',
    },
    {
      title: 'Password',
      dataIndex: 'loaiCvID',
      key: 'loaiCvID',
    },
    {
      title: 'Email',
      dataIndex: 'diaDiem',
      key: 'diaDiem',
    },
    {
      title: 'Phone',
      dataIndex: 'noiDung',
      key: 'noiDung',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary" icon={<EyeOutlined />}></Button>
          <Button onClick={() => handleEditUser(record.id)} type="primary" icon={<EditOutlined />}></Button>
          <Button type="primary" onClick={() => handleDeleteUser(record.id)} icon={<DeleteOutlined />}></Button>
        </span>
      ),
    },
  ];

  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {contextHolder}
      <Row justify={'end'}>
        <Col></Col>
      </Row>
      <ThemLich />
      <Button onClick={() => handleAddUser()}  type="primary" icon={<EditOutlined />}> Thêm lịch</Button>
      <Divider>DANH SÁCH NGƯỜI DÙNG</Divider>
      <Table columns={columns} dataSource={users.map(user => ({ ...user, key: user._id }))} />
      <ThemLich
        visible={open}
        onClose={() => setOpen(false)}
        refreshUsers={loadUsers}
      />
      <Sua
        visible={open}
        onClose={() => setOpen(false)}
        id={selectedUserId}
        refreshUsers={loadUsers}
      />
    </Content>
  );
}

export default ListUser;
