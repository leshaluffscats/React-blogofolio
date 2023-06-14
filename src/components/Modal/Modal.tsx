import styles from './Modal.module.scss';
import Error from '../Error/Error';
import { IModal } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { closeModalAction } from '../../store/reducers/modalReducer';

const Modal = (props: IModal) => {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <button onClick={() => dispatch(closeModalAction())}>
                    X
                </button>
                <Error errorMessage={props.message} />
            </div>
        </div>
    );
};

export default Modal;