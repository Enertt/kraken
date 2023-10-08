import styles from './ForgotPassStepTwo.module.scss'
import Field from '../../../ui/field/Field'
import {useEffect, useState} from 'react'
import {useForgotPassword} from '../../hooks/useForgotPassword'
import Button from '../../../ui/button/Button'
import CaptchaInput from "../../../ui/field/CaptchaInput.jsx";
import {postRecoveryFromEmail} from "../../../../app/api/public.api.js";

const ForgotPassStepTwo = ({handleNext}) => {
    const [captchaNumber1, setCaptchaNumber1] = useState(0)
    const [captchaNumber2, setCaptchaNumber2] = useState(0)
    // const [isCaptchaValue, setIsCaptchaValue] = useState(0)
    const [captchaValue, setCaptchaValue] = useState('')

    const {errors, handleSubmit, onSubmit, register} = useForgotPassword(
        captchaValue,
        captchaNumber1 + captchaNumber2
    )

    const generateCaptcha = () => {
        const number1 = Math.floor(Math.random() * 21)
        const number2 = Math.floor(Math.random() * 21)
        setCaptchaNumber1(number1)
        setCaptchaNumber2(number2)
    }

    useEffect(() => {
        generateCaptcha()
    }, [])

    // const handleVerifyCaptcha = data => {
    //     setIsCaptchaValue(data)
    // }

    const [req_error, setReqError] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        postRecoveryFromEmail(username, email).then(r => {
            // console.log(r)
            if (r.status === 200) {
                handleNext();
            } else {
                setReqError(true)
            }
        }).catch(e => {
            // console.log(e)
            setReqError(true)
        })
    };

    return (
        //TODO: Add navigation button to the previous step!
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.loginInput}>
                <label className={`${errors?.login?.message ? styles.labelError : ''}`}>
                    Your login
                </label>
                <Field
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    error={errors?.login?.message || req_error}
                    name='login'
                    register={register}
                    options={{
                        required: `You didn't fill this field!`
                    }}
                    type='text'
                    placeholder={
                        errors?.login?.message ? errors.login.message : 'Enter your Login'
                    }
                    autoComplete='off'
                />
            </div>
            <div className={styles.emailInput}>
                <label className={`${errors?.email?.message ? styles.labelError : ''}`}>
                    Your email
                </label>
                <Field
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    error={errors?.email?.message || req_error}
                    name='email'
                    register={register}
                    options={{
                        required: 'Enter your email'
                    }}
                    type='email'
                    placeholder={
                        errors?.email?.message ? errors.email.message : 'Enter your email'
                    }
                    autoComplete='off'
                />
            </div>
            <div className={styles.verifyInput}>
                <CaptchaInput value={captchaValue}
                              onChange={(e) => setCaptchaValue(e.target.value.toUpperCase())}/>

                {/*<div className={styles.input}>*/}
                {/*    <VerifyField*/}
                {/*        error={errors?.captcha?.message}*/}
                {/*        name='captcha'*/}
                {/*        register={register}*/}
                {/*        options={{*/}
                {/*            required: 'Wrong captcha'*/}
                {/*        }}*/}
                {/*        type='text'*/}
                {/*        placeholder='Enter Captcha'*/}
                {/*        autoComplete='off'*/}
                {/*        onVerify={handleVerifyCaptcha}*/}
                {/*    />*/}
                {/*    <div className={styles.captchaNumbers}>*/}
                {/*        <button*/}
                {/*            onClick={generateCaptcha}*/}
                {/*        >{`${captchaNumber1}+${captchaNumber2}=?`}</button>*/}
                {/*    </div>*/}
                {/*    <div className={styles.captchaBtn}>*/}
                {/*        <button onClick={generateCaptcha}>refresh captcha</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={styles.button}>
                    <Button clickHandler={handleClick}>Recovery</Button>
                </div>
            </div>
        </form>
    )
}

export default ForgotPassStepTwo
