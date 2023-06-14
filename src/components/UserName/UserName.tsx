import styles from "./UserName.module.scss"
import { IUserName } from '../../types';
import { useAppSelector } from '../../store/hooks';

const UserName = () => {
    const username = useAppSelector(state => state.auth.username);

    function printInitials(str: string): string {
        return str.split(" ")
            .map(el => el[0])
            .join("");
    }

    return (
        <div className={styles.title}>
            <div>{printInitials(username)}</div>
            <h5>{username}</h5>
        </div>
    );
};

export default UserName;