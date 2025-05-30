import styles from './index.module.scss'

import React, { useState, useEffect, useMemo } from 'react'

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


import { useNavigate, useLocation } from "react-router-dom";

import { ROUTE_PATHS } from '../../../router/index'; // 导入路由路径常量

const routePath = ROUTE_PATHS; // 导入路由路径常量

export const rawItems = [
  { 
    key: '1', 
    icon: <PieChartOutlined />, 
    label: '公告板',
    path: routePath.INDEX, 
  },
  {
    key: 'sub1',
    label: '目录1',
    icon: <MailOutlined />,
    children: [
      { key: '2', label: '用户管理', path: routePath.SYSTEM_MENU1 },
      { key: '3', label: '菜单3', path: routePath.FIRST_MENU3 },
    ],
  },
  {
    key: 'sub2',
    label: '目录2',
    icon: <AppstoreOutlined />,
    children: [
      { key: '4', label: '菜单4', path: routePath.SECOND_MENU4 },
      { key: '5', label: '菜单5', path: routePath.SECOND_MENU5 },
    ],
  },
];

const SideBar = () => {
  
  const navigate = useNavigate();
  
  const { pathname } = useLocation();

  const hasLogo = false; // 假设您有一个标志来判断是否显示logo

  const [collapsed, setCollapsed] = useState(false);
  
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  // 处理路径拼接的函数
  const getFullPath = (item, parentRoute = '') => {
    // 如果有父级路由，且当前项有path，则拼接
    if (parentRoute && item.path) {
      // 确保路径格式正确：移除多余的斜杠
      const cleanParent = parentRoute.replace(/\/+$/, '');
      const cleanPath = item.path.replace(/^\/+/, '');
      return `${cleanParent}/${cleanPath}`;
    }
    // 没有父级路由但有自身路径
    return item.path || '';
  };

  // 递归处理菜单项，添加完整路径
  const processMenuItems = (items, parentRoute = '') => {
    return items.map(item => {
      // 计算当前项的完整路径
      const fullPath = getFullPath(item, parentRoute);
      
      // 复制当前项
      const processedItem = { ...item };
      
      // 如果有路径，则添加到项中
      if (fullPath) {
        processedItem.fullPath = fullPath;
      }
      
      // 如果有子菜单，递归处理
      if (item.children) {
        // 确定子菜单的父级路由：优先使用当前项的route，其次使用当前项的fullPath
        const childParentRoute = item.route || fullPath || '';
        processedItem.children = processMenuItems(item.children, childParentRoute);
      }
      
      return processedItem;
    });
  };
  
  // 使用 useMemo 缓存处理后的菜单项
  const items = useMemo(() => rawItems, []);

  useEffect(() => {
    // 设置选中状态
    const findKeyByPath = (items, path) => {
      for (const item of items) {
        if (item.path === path) return [item.key];
        if (item.children) {
          const childKey = findKeyByPath(item.children, path);
          if (childKey) return childKey;
        }
      }
      return [];
    };
    
    // 设置默认展开第一个目录
    // if (!openKeys.length && items.length > 1) {
    //   setOpenKeys([items[1].key]);
    // }
    
    setSelectedKeys(findKeyByPath(items, pathname));
  }, [pathname, items, openKeys.length]);
  
  // 处理菜单点击
  const handleMenuClick = ({ key }) => {
    const findItem = (items, targetKey) => {
      for (const item of items) {
        if (item.key === targetKey) return item;
        if (item.children) {
          const found = findItem(item.children, targetKey);
          if (found) return found;
        }
      }
      return null;
    };

    const menuItem = findItem(items, key);
    if (menuItem && menuItem.path) {
      navigate(menuItem.path);
    }
  };

  // 处理父菜单展开状态
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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

        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        onClick={handleMenuClick}
      >
      
      {/* 这里在收缩状态下使用样式也不生效 */}

      
      </Menu>
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