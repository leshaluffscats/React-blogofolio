import { useState, useEffect } from 'react';
import PostItem from '../PostItem/PostItem';
import styles from "./PostList.module.scss"
import { IPostItemProps, ISelectedPage } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadPagePostsAsyncAction } from '../../store/reducers/postsReducer';
import ReactPaginate from 'react-paginate';
import { POSTS_API } from '../../data/constants';


const PostList = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.posts.posts);
    const PER_PAGE = 12;
    const [postsAmount, setPostsAmount] = useState(0);

    useEffect(() => {
        fetch(`${POSTS_API}/blog/posts/`)
            .then(res => res.json())
            .then(res => setPostsAmount(res.count));
        fetch(`${POSTS_API}/blog/posts/?limit=${PER_PAGE}&offset=1`)
            .then(res => res.json())
            .then(res => res.results)
            .then(res => posts.length !== res.length && dispatch(loadPagePostsAsyncAction(res))); //чтобы не рендерились заново посты, поэтому проверка что если они уже существуют то заново не рендерится то же самое
    }, []);

    function handlePageClick({ selected: selectedPage }: ISelectedPage) {
        fetch(`${POSTS_API}/blog/posts/?limit=${PER_PAGE}&offset=${selectedPage * 12}`)
            .then(res => res.json())
            .then(res => res.results)
            .then(res => dispatch(loadPagePostsAsyncAction(res)))
    }

    return (
        <section>
            <div className={styles.postlist}>
                {posts.map(el =>
                    <PostItem date={el.date} title={el.title} text={el.text} image={el.image} key={el.id} id={el.id}
                    />
                )}
            </div>

            <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                pageCount={Math.ceil(postsAmount / PER_PAGE)}
                onPageChange={handlePageClick}
                containerClassName={styles.paginatio}
                previousLinkClassName={styles.paginatio__linkPrevios}
                nextLinkClassName={styles.paginatio__linkNext}
                disabledClassName={styles.paginatio__linkDisabled}
                activeClassName={styles.paginatio__linkActive}
                pageClassName={styles.paginatio__page}
            />
        </section>
    );
};

export default PostList;