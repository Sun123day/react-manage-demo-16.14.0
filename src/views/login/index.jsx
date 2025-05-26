import styles from './index.module.scss';
import LogoContent from './LogoContent/index.jsx';
import LoginContent from './LoginContent/index.jsx';

const Login = () => {
  return (
    <div className={styles.container}>
      {/* <img 
        src="/src/assets/background.jpg" 
        alt=""
        className={styles.background_img}
      /> */}
      <div className={styles.logoBox}>
        <LogoContent />
      </div>
      <div className={styles.loginBox}>
        <LoginContent />
      </div>
    </div>
  )
}
export default Login;
