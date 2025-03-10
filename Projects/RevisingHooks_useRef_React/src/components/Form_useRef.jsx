import styles from './Form.module.css';
import { useRef, useState } from 'react';
const Form = ({ formValues }) => {

    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const checkBox = useRef(null);
    const [inputState, setState] = useState({
        email: false,
        password: false
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Hello");

        const mail = emailInput.current.value;
        const password = passwordInput.current.value;
        const checkBoxValue = checkBox.current.checked;

        const hasError = mail === "" || password === "";
        if (hasError) {
            setState({
                email: mail === "",
                password: password === ""
            });
            return;
        }
        else {
            formValues(mail, password, checkBoxValue);
            emailInput.current.value = "";
            passwordInput.current.value = "";
            checkBox.current.checked = false;
            setState({
                email: false,
                password: false
            });
        }

        // console.log(mail, password, checkBoxValue);

    }

    return <form className={`${styles.form_group}`} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailInput} style={{ border: inputState.email ? "2px solid red" : "" }} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordInput} style={{ border: inputState.password ? "2px solid red" : "" }} />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={checkBox} />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}
export default Form;