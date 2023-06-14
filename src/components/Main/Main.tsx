import { useContext } from 'react';
import PostList from '../PostList/PostList';
import Tabs from '../Tabs/Tabs';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import styles from "./Main.module.scss";
import Heading from '../Heading/Heading';
import { useAppSelector } from '../../store/hooks';
import FavPosts from '../FavPosts/FavPosts';
import MyPosts from '../MyPosts/MyPosts';

const Main = () => {
    const { isDark } = useContext(ThemeContext);
    const {all, favorites, myPosts} = useAppSelector(state => state.tabs);

    return (
        <main className={isDark ? styles.containerDark : styles.container}>
            <Heading heading='Blog' />
            <Tabs />
            {all && <PostList />}
            {favorites && <FavPosts />}
            {myPosts && <MyPosts/>}
        </main>
    );
};

export default Main;