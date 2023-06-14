import { useState, useEffect } from "react";
import { POSTS_API } from "../../data/constants";
import axios from "axios";
import { useAppSelector } from "../../store/hooks";
import PostItem from "../PostItem/PostItem";
import { IPostItemProps } from "../../types";
import styles from "../FavPosts/FavPosts.module.scss";
import Error from "../Error/Error";

const MyPosts = () => {
    const [myPosts, setMyPosts] = useState<IPostItemProps[]>([]);
    const accessToken = useAppSelector(state => state.tokens.access)

    useEffect(() => {
        axios.get(`${POSTS_API}/blog/posts/my_posts/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(({ data: { results } }) => { setMyPosts(results) })
    }, []);

    return (
        <>
            {!accessToken && <Error errorMessage="You have to authorize" />}
            {accessToken && !myPosts.length && <h3 className={styles.h3}>You have not posted any news</h3>}
            <div className={styles.favPosts}>
                {myPosts.map(el => <PostItem date={el.date} title={el.title} text={el.text} image={el.image} key={el.id} id={el.id}
                />)}
            </div>
        </>

    );
};

export default MyPosts;