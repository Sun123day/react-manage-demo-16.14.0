import { createBrowserRouter, Navigate } from "react-router-dom"
import React from 'react';
const Test = React.lazy(() => import('../views/test'))
const Login = React.lazy(() => import('../views/login'))

const Layout = React.lazy(() => import('../layout/index'))

const BillBoard = React.lazy(() => import('../views/billBoard/index'))

const UserManage = React.lazy(() => import('../views/userManage/index'))

// 创建路由路径常量 - 直接导出
export const ROUTE_PATHS = {
  INDEX: '/index',
  SYSTEM_MENU1: '/system/userManage',
}

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
    path: '/',
    element: <Navigate to={ROUTE_PATHS.INDEX} replace />,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: ROUTE_PATHS.INDEX,
        Component: BillBoard,
      },
      {
        path: ROUTE_PATHS.SYSTEM_MENU1,
        Component: UserManage,
      },
  ]
  }
])
export default routes