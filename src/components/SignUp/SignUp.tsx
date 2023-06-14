import { useContext, useState, FormEventHandler } from 'react';
import styles from "../SignIn/SignIn.module.scss";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Link } from 'react-router-dom';
import { POSTS_API } from '../../data/constants';
import axios from 'axios';
import Heading from '../Heading/Heading';

const SignUp = () => {
    const { isDark } = useContext(ThemeContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [emailError, setEmailError] = useState({
        message: "",
    })
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [passwordError, setPasswordError] = useState({
        message: "",
    })

    const data = {
        username,
        email,
        password
    }

    function validateEmail() {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    function validatePassword() {
        return password === confirmedPassword;
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();
        if (validateEmail() && validatePassword()) {
            axios.post(`${POSTS_API}/auth/users/`, data)
        };
        validateEmail() ? setEmailError({ message: "" }) : setEmailError({ message: "the email is not valid" });
        validatePassword() ? setPasswordError({ message: "" }) : setPasswordError({ message: "the passwords do not match" });
    }

    return (
        <div className={isDark ? styles.signInPageDark : styles.signInPage}>
            <Link to="/" className={styles.backToHome}>Back to home</Link>
            <Heading heading='Sign Up' />
            
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Name
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
                </label>
                <label>
                    Email
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email}
                        style={
                            emailError.message ? { color: "red" } : { color: "#000" }
                        }
                    />
                </label>
                <p>{emailError.message}</p>
                <label>
                    Password
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                </label>
                <label>
                    Confirm Password
                    <input type="password" onChange={e => setConfirmedPassword(e.target.value)} value={confirmedPassword} />
                </label>
                <p>{passwordError.message}</p>

                <button type='submit'>
                    Sign Up
                </button>
                <p>Already have an account?
                    <Link to="/sign-in"><span>Sign In</span></Link>
                </p>
            </form>
        </div >

    );
};

export default SignUp;