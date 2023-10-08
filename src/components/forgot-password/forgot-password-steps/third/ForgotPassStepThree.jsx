import Field from '../../../ui/field/Field'
import styles from './ForgotPassStepThree.module.scss'
import {useState} from "react";
import Button from "../../../ui/button/Button.jsx";
import {postCheckRecoveryFromEmail} from "../../../../app/api/public.api.js";

const ForgotPassStepThree = ({handleNext, code, setCode}) => {

    const [error, setError] = useState(false);

    const handleClick = () => {
        postCheckRecoveryFromEmail(code).then(r => {
            // console.log(r)
            if (r.status === 200) {
                handleNext();
            } else {
                setError(true)
            }
        }).catch(e => {
            // console.log(e)
            setError(true)
        })

    };

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.verifyInput}>
                <label
                    className={`${error ? styles.labelError : ''}`}
                >
                    Verification code
                </label>
                <Field
                    value={code}
                    error={error}
                    name='login'
                    onChange={(e) => setCode(e.target.value)}
                    options={{
                        required: `You didn't fill this field!`
                    }}
                    type='text'
                    placeholder={'Enter reset verification code'}
                    autoComplete='off'
                />
            </div>
            <div className={styles.button}>
                <Button clickHandler={handleClick}>Recovery</Button>
            </div>
        </form>
    )
}

export default ForgotPassStepThree
