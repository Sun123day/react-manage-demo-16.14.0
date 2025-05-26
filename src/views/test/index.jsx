import styles from './index.module.scss';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      {/* 单个的item */}
      <div className={styles.item}>默认样式</div>
      {/* item同时和item-success一起用 */}
      <div className={`${styles.item} ${styles.itemSuccess}`}>
        成功状态样式===>不拆开为itemSuccess
      </div>
      <div className={`${styles.item} ${styles['item-success']}`}>
        成功状态样式===>拆开为item-success
      </div>
    </div>
  )
}
export default Login;
