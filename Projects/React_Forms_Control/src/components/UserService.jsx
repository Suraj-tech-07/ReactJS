import styles from './css/UserService.module.css'
import Container from './Container';
import Login from './Login_Form';
import Register from './Register_form';
import Animation from './Animation_box';
const UserService = () => {
    return <div className={`${styles.userService}`} >

        <Login></Login>

        <Register></Register>


        <Animation></Animation>

    </div >

}
export default UserService;