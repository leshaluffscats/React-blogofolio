import { useContext } from 'react';
import styles from "./Success.module.scss"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Heading from '../Heading/Heading';

const Success = () => {
    const { isDark } = useContext(ThemeContext)

    return (
        <div className={isDark ? styles.successPageDark : styles.successPage}>
            <Link to="/" className={styles.backToHome}>Back to home</Link>
            <Heading heading='Success' />
            <div>
                <p>
                    Email confirmed. Your registration is now completed
                </p>
                <Link to="/">Go to home</Link>
            </div>
        </div >
    );
};

export default Success;