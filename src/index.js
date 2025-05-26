// 项目入口 从此处运行

// react必要两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入重置样式
import './styles/index.scss';
// 导入路由
import { RouterProvider } from "react-router-dom";
import router from './router';

// 导入antd组件
// import './plugins/index'

// 导入项目根组件
import App from './App';

// 把根组件渲染到id为root的dom节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
);
