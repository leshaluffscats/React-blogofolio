import { useContext, useState, FormEventHandler, useEffect } from 'react';
import styles from "./SignIn.module.scss"
import { useNavigate, Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUser } from '../../store/reducers/authReducer';
import axios from 'axios';
import { POSTS_API } from '../../data/constants';
import Error from '../Error/Error';
import { setAccessTokenAction } from '../../store/reducers/tokenReducer';
import Heading from '../Heading/Heading';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isDark } = useContext(ThemeContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        errorMessage: "",
    })

    const accessToken = useAppSelector(state => state.tokens.access);

    const handleLogin: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        axios.post(`${POSTS_API}/auth/jwt/create/`, {
            email,
            password
        }).then(({ data }) => {
            dispatch(setAccessTokenAction(data.access))
        }).catch(err => {
            setError({ errorMessage: err.response.data.detail });
            setEmail("");
            setPassword("");
        });
    }

    useEffect(() => {
        if (accessToken) {
            axios.get(`${POSTS_API}/auth/users/me/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then(({ data }) => dispatch(setUser({
                    email: data.email,
                    username: data.username,
                    id: data.id,
                })))
            navigate("/");
        }
    }, [accessToken])

    return (
        <div className={isDark ? styles.signInPageDark : styles.signInPage}>
            <Link to="/" className={styles.backToHome}>Back to home</Link>
            <Heading heading='Sign in' />
            {error && <Error errorMessage={error.errorMessage} />}
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    Email
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                </label>
                <label htmlFor="">
                    Password
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                </label>
                <Link to={"/forgot-password"}>Forgot password?</Link>
                <button type='submit'>
                    Sign In
                </button>
                <p>Don't have an account?
                    <Link to={'/sign-up'}> <span>Sign Up</span></Link>
                </p>
            </form>
        </div >
    );
};

export default SignIn;