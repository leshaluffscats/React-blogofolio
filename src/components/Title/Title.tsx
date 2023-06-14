import { useState } from 'react';
import UserName from '../UserName/UserName';
import styles from './Title.module.scss'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/svg/userIcon.svg';
import { useAppSelector } from '../../store/hooks';


const Title = () => {
    const username = useAppSelector(state => state.auth.username)
    const navigate = useNavigate();

    function handleClick() {
        navigate('/sign-in');
    }

    return (
        <div
            className={ username ? styles.titleActive : styles.title}
            onClick={handleClick}
        >
            {!username && <img src={icon} />}
            {username && <UserName />}
        </div>
    );
};

export default Title;