import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'
import styles from './ForgotPassStepFour.module.scss'
// import { useNewPassword } from '../../hooks/useNewPassword'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {postCheckRecoveryFromEmail2} from "../../../../app/api/public.api.js";

const ForgotPassStepFour = ({code}) => {
    // const { errors, handleSubmit, onSubmit, register, getValues } =
    // 	useNewPassword()

    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleClick = () => {
        // console.log(code)
        postCheckRecoveryFromEmail2(code, password2).then(r => {
            // console.log(r)
            if (r.status === 200) {
                navigate('/login')
            } else {
                setError(true)
            }
        }).catch(e => {
            // console.log(e)
            setError(true)
        })
    };

    // const validateRepeatPassword = value => {
    // 	const newPassword = getValues('newPassword')
    // 	return value === newPassword || 'Passwords do not match'
    // }

    return (
        <div className={styles.form}>
            <div className={styles.newPassInput}>
                <label
                    className={`${error ? styles.labelError : ''}`}
                >
                    New password
                </label>
                <Field
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    error={error}
                    name='newPassword'
                    // register={register}
                    options={{
                        required: `You didn't fill this field!`,
                    }}
                    type='password'
                    placeholder={'Enter your new pass'}
                    autoComplete='off'
                />
            </div>
            <div className={styles.repeatPassInput}>
                <label
                    className={`${
                        error ? styles.labelError : ''
                    }`}
                >
                    Repeat New password
                </label>
                <Field
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}

                    error={error}
                    name='repeatPassword'
                    // register={register}
                    options={{
                        required: `You didn't fill this field!`,
                    }}
                    type='password'
                    placeholder={'Repeat new pass'}
                    autoComplete='off'
                />
            </div>
            <div className={styles.button}>
                <Button clickHandler={handleClick}>Recovery</Button>
            </div>
        </div>
    )
}

export default ForgotPassStepFour
