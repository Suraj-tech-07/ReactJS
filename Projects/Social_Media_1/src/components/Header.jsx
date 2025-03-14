import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.jpg";
const Header = () => {
    return
    <div className="header">
        <div className="header-hamburger disabled">
            <GiHamburgerMenu />
        </div>
        <div className="headerlogo">
            <img src={logo} alt="logo" height="40px" width="40px" className='rounded-circle' />
        </div>

        <div className="header-navbar">navbar </div>
        <div className="header-login-signup">login and signup</div>
    </div>
}
export default Header;