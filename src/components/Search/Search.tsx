import Heading from '../Heading/Heading';
import { useAppSelector } from '../../store/hooks';
import PostItem from '../PostItem/PostItem';
import styles from "./Search.module.scss"
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';


const Search = () => {
    const { isDark } = useContext(ThemeContext);
    const posts = useAppSelector(state => state.posts.posts);
    const { searchValue } = useAppSelector(state => state.searchValue)
    return (
        <div className={isDark ? styles.searchWrapperDark : styles.searchWrapper}>
            <Heading heading={searchValue ? `Search results for ${searchValue}` : "No search request"} />
            <div className={isDark ? styles.searchResultsDark : styles.searchResults}>
                {posts.map(el =>
                    <PostItem date={el.date} title={el.title} text={el.text} image={el.image} key={el.id} id={el.id}
                    />

                )}
            </div>
        </div>
    );
};

export default Search;