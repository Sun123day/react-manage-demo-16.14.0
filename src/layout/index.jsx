import styles from './index.module.scss'

import React from 'react'

// 引入PaHeader, SideBar, TagsView, NavBar, AppMain组件
import PaHeader from './components/PaHeader'
import SideBar from './components/SideBar'
import TagsView from './components/TagsView'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'

const Layout = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.PaHeader}>
        <PaHeader />
      </div>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <div className={styles.Content}>
        <div className={styles.TagsView}>
          <TagsView />
        </div>
        <div className={styles.NavBar}>
          <NavBar />
        </div>
        <div className={styles.AppMain}>
          <AppMain />
        </div>
      </div>
    </div>
  )
}
export default Layout