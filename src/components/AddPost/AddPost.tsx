import { useState, FormEventHandler, useContext } from 'react';
import styles from './AddPost.module.scss';
import axios from 'axios';
import { POSTS_API } from '../../data/constants';
import { useAppSelector } from '../../store/hooks';
import Error from '../Error/Error';
import Heading from '../Heading/Heading';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [lessonNumber, setLessonNumber] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [text, setText] = useState("");
    const [error, setError] = useState({
        message: "",
    });
    const [filename, setFilename] = useState("");
    const accessToken = useAppSelector(state => state.tokens.access);
    const { isDark } = useContext(ThemeContext);

    const handleImageUpload = (e: any) => {
        const target = e.target.files[0];
        setImage(target);
        setFilename(target.name);
        console.log(filename);
    }

    function resetInputValues() {
        setTitle("");
        setDescription("");
        setLessonNumber("");
        setImage("");
        setText("");
    }

    const addPost: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();

        const body = new FormData();
        body.append('image', image);
        body.append('text', text);
        body.append('title', title);
        body.append('description', description);
        body.append('lesson_num', lessonNumber);

        axios.post(`${POSTS_API}//blog/posts/`, body, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
            }
        })
            .then(() => resetInputValues())
            .catch(err => {
                if (err.response.data.code === "bad_authorization_header") {
                    setError({ message: "Authorization required" })
                    resetInputValues();
                }
                resetInputValues();
            })
    }

    return (
        <section className={isDark ? styles.addPost__containerDark : styles.addPost__container}>
            <p>Home</p>
            <Heading heading='Add Post' />
            {error.message && <Error errorMessage={error.message} />}
            <form onSubmit={addPost}>
                <label>
                    title <br />
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                </label>
                <div>
                    <label>
                        lesson number <br />
                        <input type="text" onChange={e => setLessonNumber(e.target.value)} value={lessonNumber} />
                    </label>
                    <label >
                        <p>Image</p>
                        <div className={styles.input__wrapper}>
                            <input type="file" className={styles.input__file} onChange={handleImageUpload} />
                            <p className={styles.filename}>{filename}</p>
                            <span className={styles.fileLabel}>Upload new</span>
                        </div>
                    </label>
                </div>

                <label>
                    description <br />
                    <textarea className={styles.textareaSmall} onChange={e => setDescription(e.target.value)} value={description} />
                </label>
                <label>
                    text <br />
                    <textarea onChange={e => setText(e.target.value)} value={text} />
                </label>
                <div className={styles.buttons__wrapper}>
                    <button type='reset'>Delete Post</button>
                    <button type='reset' onClick={() => resetInputValues()}>Cancel</button>
                    <button type='submit'>Add Post</button>
                </div>
            </form>
        </section>
    );
};

export default AddPost;