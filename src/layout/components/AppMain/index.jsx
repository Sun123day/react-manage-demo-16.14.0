import styles from './index.module.scss'

import React from 'react'

const AppMain = ({ children }) => {
  return (
    <div className={styles.appMain}>
      {children} {/* 渲染传入的子组件 */}
    </div>
  )
}
export default AppMain