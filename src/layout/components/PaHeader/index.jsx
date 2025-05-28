import styles from './index.module.scss'

import React from 'react'

import { useNavigate } from "react-router-dom";

import { 
  Space, 
  Dropdown,
  Modal,
} from 'antd';
import {
  HomeOutlined,
  QuestionCircleOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';

const PaHeader = () => {
  
  const navigate = useNavigate();

  const { confirm } = Modal;
  const items = [
    {
      key: 'account',
      label: '账户设置',
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ];
  const onClick = ({ key }) => {
    console.log('click ', key); 
    switch (key) {
      case 'account':
        console.log('账户设置');
        break;
      case 'logout':
        console.log('退出登录');
        LogOut()
        break;
      default:
        break;
    }
  }

  const LogOut = () => {
    
    confirm({
      title: '确认提示',
      icon: <ExclamationCircleFilled />,
      content: '您确定要退出登录吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        navigate('/login');
        // setTimeout(() => {
        //   console.log('navigate');
        // }, 1000); // 使用 setTimeout 确保路由跳转发生
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    // console.log('confirm', confirm);
  }

  return (
    <div className={styles.headerBox}>
      <div className={styles.leftBox}>
      ❤️
      <div style={{width: 1, height: 25, background: '#b3bcc0', margin: '0 10px'}} />
      ♠️
      <div className={styles.mainLogoName}>这个是主logo名称</div>
      <div style={{width: 1, height: 16, background: '#b3bcc0', margin: '0 10px'}} />
      <div className={styles.subLogoName}>这个是副logo名称</div>
      </div>
      <div className={styles.rightBox}>
        <Space>
          <HomeOutlined/>
          <QuestionCircleOutlined style={{margin: '0 16px', }} />

          <Dropdown menu={{ items, onClick }}>
            <a 
              onClick={(e) => e.preventDefault()}
              style={{marginRight: '16px', }}
            >
              这是昵称
            </a>
          </Dropdown>
        </Space>
        
      </div>

    </div>
    
  )
}
export default PaHeader