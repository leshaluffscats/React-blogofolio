import { useContext } from 'react';
import styles from './PasswordForm.module.scss';
import { IResetPassFormProps } from '../../types';
import { ThemeContext } from '../ThemeContext/ThemeContext';


const PasswordForm = (props: IResetPassFormProps) => {
    const { isDark } = useContext(ThemeContext);
    const setEmail = props.setFunc;
    
    return (
        <div className={isDark ? styles.forgottenPassWrapperDark : styles.forgottenPassWrapper}>
            <form onSubmit={props.handleReset}>
                <label >
                    {props.text}
                    <input type={props.text} onChange={e => setEmail(e.target.value)} value={props.email} />
                </label>
                <button type='submit'>{props.buttonText}</button>
            </form>
        </div>

    );
};

export default PasswordForm;