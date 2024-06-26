import React from "react";
import {Layout } from 'antd';
const { Footer } = Layout;


function Foot(){
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
      };
    return(
        <Footer style={footerStyle}>Footer</Footer>
    );
}

export default Foot;