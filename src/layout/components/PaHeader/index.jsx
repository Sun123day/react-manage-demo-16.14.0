import styles from './index.module.scss'

import React from 'react'

import { useNavigate } from "react-router-dom";

import { 
  Space, 
  Dropdown,
  Modal,
  Tooltip,
} from 'antd';
import {
  HomeOutlined,
  QuestionCircleOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';

import antdSvg from '../../../assets/antd.svg'
import reactSvg from '../../../assets/react.svg'

const PaHeader = () => {
  const antdLogo = (
    <img src={antdSvg} alt="logo" style={{height: '24px'}} />
  )

  const reactLogo = (
    <img src={reactSvg} alt="logo" style={{height: '24px', marginLeft: '8px'}} />
  )

  const subLogo = (
    <div style={{fontSize: '16px'}}>
      ❤️♠️
    </div>
  )

  const navigate = useNavigate();

  const { confirm } = Modal;

  // 要修改tooltip的文字样式，需要这样修改
  const homeText = <span style={{color: 'rgba(0, 0, 0, 0.88)'}}>首页</span>
  const helpText = <span style={{color: 'rgba(0, 0, 0, 0.88)'}}>帮助文档</span>

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
      {antdLogo}
      {reactLogo}
      <div style={{width: 1, height: 16, background: '#b3bcc0', margin: '0 10px'}} />
      {subLogo}
      <div className={styles.mainLogoName}>这个是主logo名称</div>
      <div style={{width: 1, height: 16, background: '#b3bcc0', margin: '0 10px'}} />
      <div className={styles.subLogoName}>这个是副logo名称</div>
      </div>
      <div className={styles.rightBox}>
        <Space>
          <Tooltip placement="bottomRight" title={homeText} arrow={false} color="#fff">
            <HomeOutlined />
          </Tooltip>
          <Tooltip placement="bottomRight" title={helpText} arrow={false} color="#fff">
            <QuestionCircleOutlined style={{margin: '0 16px', }} />
          </Tooltip>
          <Dropdown menu={{ items, onClick }}>
            <a 
              onClick={(e) => e.preventDefault()}
              style={{marginRight: '16px', userSelect: 'none' }}
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