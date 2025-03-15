import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../css/Header.module.css";
import logo from "../assets/logo.jpg";
const Header = () => {
    return (
        <div className={`${styles.header}`} >
            <div className={`${styles.header_hamburger, styles.disabled} `}>
                <GiHamburgerMenu />
            </div>

            <div className={`${styles.header_logo}`}>
                <img src={logo} alt="logo" height="40px" width="40px" className='rounded-circle' />
            </div>

            <div className="header-navbar">
                <ul className='list-group list-group-horizontal space-between'>
                    <li>Home </li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="header-login-signup">login and signup</div>
        </div >
    );
}
export default Header;