import styles from "./PostItem.module.scss"
import { IPostItemProps } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";


const PostItem = (props: IPostItemProps) => {
    const { isDark } = useContext(ThemeContext);
    const navigate = useNavigate();
    return (
        <div
            className={isDark ? styles.postItemDark : styles.postItem}
            onClick={() => navigate(`/post/${props.id}`)}
        >
            <div>
                <img src={props.image} />
            </div>
            <p>{props.date}</p>
            <h2>{props.title}</h2>
            <p className={styles.text}>{props?.text}</p>
        </div>
    );
};

export default PostItem;