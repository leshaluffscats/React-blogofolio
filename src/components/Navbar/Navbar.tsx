import { useState } from 'react';
import BurgerButton from '../BurgerMenu/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Input from '../Input/Input';
import styles from './Navbar.module.scss'
import Title from '../Title/Title';

const Navbar = () => {
    const [activeBurger, setActiveBurger] = useState<boolean>(false);

    return (
        <nav className={styles.nav}>
            <BurgerButton setActiveBurger={setActiveBurger} />
            {activeBurger && <BurgerMenu />}
            <Input />
            <Title />
        </nav>
    );
};

export default Navbar;