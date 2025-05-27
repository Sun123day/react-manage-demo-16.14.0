import styles from './index.module.scss'

import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { 
  Space, 
  Dropdown,
  Button, 
  Modal,
} from 'antd';
import {
  HomeOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
const PaHeader = () => {
  
  const navigate = useNavigate();

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
    showModal()
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/login'); 
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

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
      
      <>
        <Modal
          title="确认提示"
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>确定要退出登录吗？</p>
        </Modal>
      </>
    </div>
    
  )
}
export default PaHeader