import LoginLayout from '../../../components/login-layout/LoginLayout.jsx'
import Field from '../../../components/ui/field/Field.jsx'
import {useLoginPage} from './useLoginPage.js'
import styles from './LoginPage.module.scss'
import Button from '../../../components/ui/button/Button.jsx'

import {useNavigate} from 'react-router-dom'
import CaptchaInput from '../../../components/ui/field/CaptchaInput.jsx'

const LoginPage = () => {
    const navigate = useNavigate()

    const {
        captchaValue,
        setCaptchaValue,
        loading,
        req_error,
        errors,
        handleSubmit,
        onSubmit,
        register
    } = useLoginPage()

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/forgot-password')
    }
    return (
        <LoginLayout heading='Authorization'>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.loginInput}>
                    <label
                        className={`${errors?.username?.message ? styles.labelError : ''}`}
                    >
                        Your login
                    </label>
                    <Field
                        error={req_error || errors?.username?.message}
                        name='username'
                        register={register}
                        options={{
                            required: `You didn't fill this field!`
                        }}
                        type='text'
                        placeholder={
                            errors?.username?.message
                                ? errors.username.message
                                : 'Enter your Login'
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
                        error={req_error || errors?.password?.message}
                        name='password'
                        register={register}
                        options={{
                            required: 'Enter your password'
                        }}
                        type='password'
                        placeholder={
                            errors?.password?.message
                                ? errors.password.message
                                : 'Enter your password'
                        }
                        autoComplete='off'
                    />
                    <div className={styles.forgotPass}>
                        <button type={'button'} onClick={handleNavigate}>Forgot pass</button>
                    </div>
                </div>
                <div className={styles.verifyInput}>
                    <CaptchaInput
                        value={captchaValue}
                        error={req_error}
                        onChange={e => setCaptchaValue(e.target.value.toUpperCase())}
                    />
                    <div className={styles.button}>
                        <Button type={'submit'} clickHandler={handleSubmit}>
                            {loading ? '...' : 'Login'}
                        </Button>
                    </div>
                </div>
            </form>
            <div className={styles.registerButton}>
                <button onClick={() => navigate('/register')}>Registration</button>
            </div>
        </LoginLayout>
    )
}

export default LoginPage
