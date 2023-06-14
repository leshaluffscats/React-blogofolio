import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from "./PostContent.module.scss";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Heading from '../Heading/Heading';
import { IPostContent } from '../../types';
import { POSTS_API } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToFavoritesAction } from '../../store/reducers/favPostsReducer';
import { openModalAction } from '../../store/reducers/modalReducer';
import Modal from '../Modal/Modal';
import { likeAction, removeLikeAction, dislikeAction, removeDislikeAction } from '../../store/reducers/likesReducer';


const PostContent = () => {
    const { isDark } = useContext(ThemeContext);
    const accessToken = useAppSelector(state => state.tokens.access);
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector(state => state.modal.isOpen);
    const { allLikes } = useAppSelector(state => state.likes);
    const { dislikes } = useAppSelector(state => state.likes);
    const { id }: any = useParams();

    const { [id]: postLikes } = allLikes;
    const { [id]: postDislikes } = dislikes;


    const [post, setPost] = useState<IPostContent>({
        id: "",
        title: "",
        image: "",
        text: "",
    });

    function deletePost() {
        fetch(`${POSTS_API}/blog/posts/${id}`, {
            method: "DELETE",
            body: id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => { if (res.status === 401 || res.status === 403) dispatch(openModalAction()) })
    }

    function likesHandler() {
        if (!allLikes[id]?.postLikes) { //можно лайкнуть только если до этого не лайкнул
            dispatch(likeAction(id))

        } else {
            dispatch(removeLikeAction(id))
        }
    }

    function dislikesHandler() {
        if (!dislikes[id]?.postDislikes) {
            dispatch(dislikeAction(id))
        } else {
            dispatch(removeDislikeAction(id))
        }

    }

    useEffect(() => {
        fetch(`${POSTS_API}/blog/posts/${id}`)
            .then(res => res.json())
            .then(res => setPost(res));
    }, [])

    return (
        <section className={isDark ? styles.contentContainerDark : styles.contentContainer}>
            {isModalOpen && <Modal message='You dont have rights to perform this action' />}
            <div className={styles.contentSubcontainer}>
                <div className={styles.home}>
                    <Link to="/">Home</Link>
                    <span>post{post.id}</span>
                </div>
                <Heading heading={post.title} />
                <div className={styles.imagesContainer}>
                    <img src={post.image} />
                </div>
                <div className={styles.description}>
                    {post.text}
                </div>
                <div className={styles.buttonsBlock}>
                    <div>
                        <button onClick={likesHandler}>Like {postLikes?.postLikes}</button>
                        <button onClick={dislikesHandler}>Dislike{postDislikes?.postDislikes}</button>
                    </div>
                    <button
                        className={styles.deleteBtn}
                        onClick={() => deletePost()}
                    >
                        Delete Post
                    </button>
                    <button
                        className={styles.btnFav}
                        onClick={() => dispatch(addToFavoritesAction(post))}
                    >
                        Add to favourites
                    </button>
                </div>
                <footer>
                    <div className={styles.footerTop}>
                        <div >
                            <button>Prev</button>
                            <p>Prev article</p>
                        </div>
                        <div>
                            <button>Next</button>
                            <p>Next article</p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default PostContent;