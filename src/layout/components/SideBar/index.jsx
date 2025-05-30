import styles from './index.module.scss'

import React, { useState } from 'react'

import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import {
  Menu,
} from 'antd';

const SideBar = () => {
  const hasLogo = false; // 假设您有一个标志来判断是否显示logo

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { key: '1', 
      icon: <PieChartOutlined />, 
      label: '菜单1' 
    },
    {
      key: 'sub1',
      label: '目录1',
      icon: <MailOutlined />,
      children: [
        { key: '2', label: '菜单2' },
        { key: '3', label: '菜单3' },
      ],
    },
    {
      key: 'sub2',
      label: '目录2',
      icon: <AppstoreOutlined />,
      children: [
        { key: '4', label: '菜单4' },
        { key: '5', label: '菜单5' },
      ],
    },
  ]
  return (
    <div className={`
        ${styles.SideBarContent} 
        ${hasLogo ? styles.showLogo : ''}
        `}
        
        style={{
          width: collapsed ? 56 : 200
        }}
    >
      {/* 直接暴力地改了这边的SideBarContent整体的宽度
        因为antd的Menu组件中改不了对应的.ant-menu-title-content样式
        ===》无法隐藏，真他么离谱啊
      */}
      
      {/* theme="light" */}
      {/* theme="dark" */}

      <Menu 
        motion={false}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        defaultSelectedKeys={['1']}
        className={styles.SideBarMenu}
      />
      {/* 这里在收缩状态下使用样式也不生效 */}

      <div className={styles.tool}>
        <div 
          className={styles.collapseBtn}
          onClick={toggleCollapsed}
        >
          {
            collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
          }
        </div>
      </div>
    </div> 
  )
}
export default SideBar