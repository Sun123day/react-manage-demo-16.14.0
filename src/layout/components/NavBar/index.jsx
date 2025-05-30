import styles from './index.module.scss'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { rawItems } from '../SideBar'

const NavBar = () => {
  const { pathname } = useLocation()
  const [breadcrumbItems, setBreadcrumbItems] = useState([])

  // 根据当前路径查找面包屑
  useEffect(() => {
    const findBreadcrumb = (items, path) => {
      for (const item of items) {
        // 检查当前项是否匹配路径
        if (item.path === path) {
          return [{ title: item.label }]
        }
        
        // 检查子项
        if (item.children) {
          for (const child of item.children) {
            if (child.path === path) {
              return [
                { title: item.label },
                { title: child.label }
              ]
            }
          }
          
          // 递归检查子项
          for (const child of item.children) {
            const result = findBreadcrumb([child], path)
            if (result.length > 0) {
              return [
                { title: item.label },
                ...result
              ]
            }
          }
        }
      }
      return []
    }
    
    const breadcrumbs = findBreadcrumb(rawItems, pathname)
    setBreadcrumbItems(breadcrumbs)
  }, [pathname])

  return (
    <div className={styles.navBarContent}>
      <div className={styles.navBar}>
        <Breadcrumb items={breadcrumbItems} separator=">" />
      </div>
    </div>
  )
}
export default NavBar