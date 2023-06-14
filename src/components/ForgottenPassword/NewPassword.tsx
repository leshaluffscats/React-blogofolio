import { useState, FormEventHandler } from 'react';
import { POSTS_API } from '../../data/constants';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PasswordForm from '../PasswordForm/PasswordForm';



const NewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const { uid, token } = useParams();

    const handleReset: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        axios.post(`${POSTS_API}/auth/users/reset_password_confirm/`, {
            uid,
            token,
            new_password: newPassword,
        });
    }

    return (
        <PasswordForm text="New Password" setFunc={setNewPassword} handleReset={handleReset} buttonText='Set New Password'/>
    );
};

export default NewPassword;