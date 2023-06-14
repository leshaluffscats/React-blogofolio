import { FC } from 'react';
import styles from "./BurgerButton.module.scss"
import { IMenuProps } from '../../types';

const BurgerButton: FC<IMenuProps> = ({ setActiveBurger }) => {
    return (
        <>
            <div
                className={styles.burger}
                onClick={() => setActiveBurger((prev: boolean) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>

    );
};

export default BurgerButton;