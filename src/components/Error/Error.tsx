import { IErrorMessage } from '../../types';
import styles from "./Error.module.scss"

const Error = (props: IErrorMessage) => {
    return (
        <div>
            <p className={styles.error}>{props.errorMessage}</p>
        </div>
    );
};

export default Error;