import { useAppSelector } from '../../store/hooks';
import Heading from '../Heading/Heading';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import styles from "./Profile.module.scss";
import { useContext } from 'react';

const Profile = () => {
    const { username, email } = useAppSelector(state => state.auth);
    const { isDark } = useContext(ThemeContext);
    return (
        <section className={isDark ? styles.profile__sectionDark : styles.profile__section}>
            <Heading heading='Your Profile' />
            <div>
                <p>Name: <span>{username}</span> </p>
                <p>Email: <span>{email}</span> </p>
            </div>
        </section>
    );
};

export default Profile;