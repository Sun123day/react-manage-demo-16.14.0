import { createBrowserRouter } from "react-router-dom"
import React from 'react';
const Test = React.lazy(() => import('../views/test'))
const Login = React.lazy(() => import('../views/login'))
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
])
export default routes