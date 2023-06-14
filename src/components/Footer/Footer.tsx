import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./Footer.module.scss";
import { useContext } from "react";

const Footer = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <footer className={isDark ? styles.footerDark : styles.footer}>
            <p>©{new Date().getFullYear()} Blogofolio</p>
            <p>All rights reserved</p>
        </footer>
    );
};

export default Footer;