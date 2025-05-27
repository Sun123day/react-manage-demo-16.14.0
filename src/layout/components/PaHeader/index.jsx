import styles from './index.module.scss'

import React from 'react'

import { Space, Dropdown } from 'antd';
import {
  HomeOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
const PaHeader = () => {
  const items = [
    {
      key: '1',
      label: '账户设置',
    },
    {
      key: '2',
      label: '退出登录',
    },
  ];

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

          <Dropdown menu={{ items }}>
            <a style={{marginRight: '16px', }}>
              这是昵称
            </a>
          </Dropdown>
        </Space>
        
      </div>
    </div>
  )
}
export default PaHeader