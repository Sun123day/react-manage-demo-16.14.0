import styles from './index.module.scss';
import LogoContent from './LogoContent/index.jsx';
import LoginContent from './LoginContent/index.jsx';

const Login = () => {
  return (
    <div className={styles.container}>
      {/* 左上角logo */}
      <div className={styles.logoBox}>
        <LogoContent />
      </div>
      {/* 登录表单 */}
      <div className={styles.loginBox}>
        <LoginContent />
      </div>
    </div>
  )
}
export default Login;
