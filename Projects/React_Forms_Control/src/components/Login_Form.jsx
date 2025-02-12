import styles from './css/Login.module.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Login = () => {

    return <>

        <form action="" className={styles.login_form}>
            <h1>Login</h1>
            <div className={styles.userName}>
                <input type="text" name="userName" id="userName" placeholder="UserName" />
                <FaUser />
            </div>
            <div className={styles.Password}>
                <input type="Password" name="Password" id="Password" placeholder="Password"
                />
                <FaLock />
            </div>
            <div className={styles.login_btn}>
                <button>Login</button>
            </div>
            <div className={styles.forgot_link}>
                <a href="#">Forgot Password ? </a>
            </div>
        </form>
    </>
}

export default Login;