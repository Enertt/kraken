import {useState} from 'react'
import LoginLayout from '../../../components/login-layout/LoginLayout.jsx'
import Button from '../../../components/ui/button/Button.jsx'
import Field from '../../../components/ui/field/Field.jsx'
// import VerifyField from '../../components/ui/field/VerifyField'
import styles from './RegistrationPage.module.scss'
import {useRegisterPage} from './useRegisterPage.js'
import CaptchaInput from "../../../components/ui/field/CaptchaInput.jsx";

const RegistrationPage = () => {
    // const [captchaNumber1, setCaptchaNumber1] = useState(0)
    // const [captchaNumber2, setCaptchaNumber2] = useState(0)
    // const [isCaptchaValue, setIsCaptchaValue] = useState(0)


    const [captchaValue, setCaptchaValue] = useState('')

    const {errorMessage, errorCap, errorReq,errors, handleSubmit, onSubmit, register} =
        useRegisterPage(captchaValue) // TODO: Change useLoginPage to useRegistrationPage!

    // const generateCaptcha = () => {
    //     const number1 = Math.floor(Math.random() * 21)
    //     const number2 = Math.floor(Math.random() * 21)
    //     setCaptchaNumber1(number1)
    //     setCaptchaNumber2(number2)
    // }

    // useEffect(() => {
    //     generateCaptcha()
    // }, [])

    // const handleVerifyCaptcha = data => {
    //     setIsCaptchaValue(data) //TODO: Fix verify captcha function!
    // }


    return (
        <LoginLayout heading='Registration'>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.loginInput}>
                    <label
                        className={`${errors?.login?.message ? styles.labelError : ''}`}
                    >
                        Your login
                    </label>
                    <Field
                        error={errorReq || errors?.login?.message}
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
                <div className={styles.passwordInput}>
                    <label
                        className={`${errors?.password?.message ? styles.labelError : ''}`}
                    >
                        Your password
                    </label>
                    <Field
                        error={errorReq || errors?.password?.message}
                        name='password'
                        register={register}
                        options={{
                            required: `You didn't fill this field!`
                        }}
                        type='password'
                        placeholder={
                            errors?.password?.message
                                ? errors.password.message
                                : 'Enter your password'
                        }
                        autoComplete='off'
                    />
                </div>
                <div className={styles.repeatPasswordInput}>
                    <label
                        className={`${
                            errors?.repeatPassword?.message ? styles.labelError : ''
                        }`}
                    >
                        Repeat Your password
                    </label>
                    <Field
                        error={errorReq || errors?.repeatPassword?.message}
                        name='repeatPassword'
                        register={register}
                        options={{
                            required: 'Repeat your password'
                        }}
                        type='password'
                        placeholder={
                            errors?.repeatPassword?.message
                            || 'Repeat your password'
                        }
                        autoComplete='off'
                    />
                </div>
                <div className={styles.emailInput}>
                    <label
                        className={`${errors?.email?.message ? styles.labelError : ''}`}
                    >
                        Your email or telegram
                    </label>
                    <Field
                        error={errorReq || errors?.email?.message}
                        name='email'
                        register={register}
                        options={{
                            required: `You didn't fill this field!`
                        }}
                        type='text'
                        placeholder={
                            errors?.email?.message
                            || 'Enter your email or @telegram'
                        }
                        autoComplete='off'
                    />
                </div>
                <div className={styles.verifyInput}>
                    <CaptchaInput error={errorReq || errorCap} value={captchaValue}
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
                        <Button clickHandler={handleSubmit}>Registration</Button>
                    </div>
                </div>
                <div style={{color: '#f46a6a', fontSize: 18, marginTop: 8}}>{errorMessage}</div>
            </form>
        </LoginLayout>
    )
}

export default RegistrationPage
