import { useContext } from 'react';
import UserName from '../UserName/UserName';
import styles from "./BurgerMenu.module.scss"
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import moon from '../../assets/svg/Icon-Moon.svg';
import sun from '../../assets/svg/Icon-Sun.svg';
import { removeUser } from '../../store/reducers/authReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeAccessTokenAction } from '../../store/reducers/tokenReducer';
import { spawn } from 'child_process';

const BurgerMenu = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(state => state.tokens.access);

    return (
        <div className={isDark ? styles.burgerMenuDark : styles.burgerMenu}>
            <div
                className={styles.userName}
                onClick={() => navigate('/sign-in')}>
                {accessToken ? <UserName /> : <span>Sign In</span>}
            </div>
            <div className={styles.upperBtns}>
                <button onClick={() => navigate('/')} >
                    Home
                </button>
                {accessToken &&
                    <>
                        <button onClick={() => navigate("/add-post")}>
                            Add Post
                        </button>
                        <button onClick={() => navigate("profile")}>
                            Profile
                        </button>
                    </>

                }
            </div>
            <div className={styles.lowerBtns}>
                <button onClick={() => setIsDark(false)}>
                    <img src={sun} alt="" />
                </button>
                <button onClick={() => setIsDark(true)}>
                    <img src={moon} alt="" />
                </button>
            </div>
            <button
                className={styles.logOutBtn}
                onClick={() => {
                    dispatch(removeUser())
                    dispatch(removeAccessTokenAction())
                }}
            >
                Log Out
            </button>
        </div>
    );
};

export default BurgerMenu;