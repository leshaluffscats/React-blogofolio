import { useState, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from "./Input.module.scss";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import axios from 'axios';
import { POSTS_API } from '../../data/constants';
import { loadPagePostsAsyncAction } from '../../store/reducers/postsReducer';
import { searchValueAction } from '../../store/reducers/searchValueReducer';


const Input = () => {
    const [input, setInput] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState("");

    function handleSearch(e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
        if (e.key === "Enter") {
            axios.get(`${POSTS_API}/blog/posts?limit=10&search=${searchValue}`)
                .then(({ data: { results } }) => dispatch(loadPagePostsAsyncAction(results)))

            navigate("/search");
            setSearchValue("");

            dispatch(searchValueAction(searchValue));
        }
    }

    return (
        <div className={styles.inputGroup}>
            {input && <input
                type="search"
                placeholder='Search...'
                onChange={e => setSearchValue(e.target.value)}
                onKeyUp={handleSearch}
            />}

            <button onClick={() => setInput(prev => !prev)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </button>
        </div>
    );
};

export default Input;