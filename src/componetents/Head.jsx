import React from "react";
import {Layout,Menu } from 'antd';
const { Header } = Layout;


function Head(){
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

    return(
      <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
    );
}

export default Head;