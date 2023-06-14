import { useAppSelector } from "../../store/hooks";
import PostItem from "../PostItem/PostItem";
import styles from "./FavPosts.module.scss";
import Error from "../Error/Error";

const FavPosts = () => {
    const favPosts = useAppSelector(state => state.favPosts.favPosts);
    const accessToken = useAppSelector(state => state.tokens.access);
    return (
        <>
            {!accessToken && <Error errorMessage="You have to authorize" />}
            {accessToken && !favPosts.length && <h3 className={styles.h3}>No favorite posts</h3>}
            {accessToken && <div className={styles.favPosts}>
                {
                    favPosts.map(el => <PostItem key={el.id} text={el.text} title={el.title} date={el.date} image={el.image} id={el.id} />)
                }
            </div>}
        </>

    );
};

export default FavPosts;