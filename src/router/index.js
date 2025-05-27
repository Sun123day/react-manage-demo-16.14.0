import { createBrowserRouter } from "react-router-dom"
import React from 'react';
const Test = React.lazy(() => import('../views/test'))
const Login = React.lazy(() => import('../views/login'))

const Layout = React.lazy(() => import('../layout/index'))

const BillBoard = React.lazy(() => import('../views/billBoard'))

const UserManage = React.lazy(() => import('../views/userManage'))

// 创建路由
const routes = createBrowserRouter([
  {
    path: '/test',
    Component: Test
  },
  {
    path: '/login',
    Component: Login
  },
  {
    // path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        path: '/index',
        Component: BillBoard,
      },
      {
        path: '/user',
        Component: UserManage,
      },
  ]
  }
])
export default routes