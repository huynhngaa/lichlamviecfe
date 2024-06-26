import React , { useEffect, useState }from 'react';
import { EyeOutlined,EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Table, Divider ,Button, Row, Col, Modal,  Form, Input, Select, Space } from 'antd';
import Sidebar from './componetents/Sidebar';
import Head from './componetents/Head';
import Foot from './componetents/Foot';
import userSerive from './service/userSerive';
import Lich from './componetents/Lich';
import Home from './componetents/Home';
const { Content} = Layout;



function App() {

 
  return (
 <Home/>

  );
}

export default App;
