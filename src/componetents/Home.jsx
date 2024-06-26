import React , { useEffect, useState }from 'react';
import { EyeOutlined,EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Table, Divider ,Button, Row, Col, Modal,  Form, Input, Select, Space } from 'antd';
import Sidebar from './Sidebar';
// import Head from ' ./Head';
import Head from './Head';
import Foot from './Foot';
import userSerive from '../service/userSerive';
import ListUser from './ListUser';
import ThemLich from './ThemLich';
const { Content} = Layout;



function Home() {

  return (
    <Layout >  
        <Head/>
      <Layout>
     <Sidebar/>
     <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          
          
          <ListUser/>
        </Layout>
      </Layout> 
      <Foot/>
    </Layout>
  );
}

export default Home;
