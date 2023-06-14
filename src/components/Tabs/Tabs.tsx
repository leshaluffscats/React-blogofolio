import styles from "./Tabs.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { tabsAction } from "../../store/reducers/tabsReducer";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from 'react';


const Tabs = () => {
    const dispatch = useAppDispatch();
    const { all, favorites, myPosts } = useAppSelector(state => state.tabs);
    const { isDark } = useContext(ThemeContext)

    return (
        <div className={isDark ? styles.tabsDark : styles.tabs}>
            <button
                className={all ? styles.btnActive : undefined}
                onClick={() => dispatch(tabsAction("ALL"))}>
                All
            </button>
            <button
                className={favorites ? styles.btnActive : undefined}
                onClick={() => dispatch(tabsAction("FAVORITES"))}>
                My Favorites
            </button>
            <button
                className={myPosts ? styles.btnActive : undefined}
                onClick={() => dispatch(tabsAction("MY_POSTS"))}>
                My posts
            </button>
        </div >
    );
};

export default Tabs;