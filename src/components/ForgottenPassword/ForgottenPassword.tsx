import { useState, FormEventHandler } from 'react';
import axios from 'axios';
import { POSTS_API } from '../../data/constants';
import styles from "./ForgottenPassword.module.scss";
import PasswordForm from '../PasswordForm/PasswordForm';

const ForgottenPassword = () => {
    const [email, setEmail] = useState("");

    const handleReset: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        axios.post(`${POSTS_API}/auth/users/reset_password/`, { email });
    }

    return (
        <PasswordForm text="Email" email={email} handleReset={handleReset} setFunc={setEmail} buttonText='Reset Password'/>
    );
};

export default ForgottenPassword;