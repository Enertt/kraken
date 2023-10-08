import {useNewPassword} from '../../../../forgot-password/hooks/useNewPassword'
import Button from '../../../../ui/button/Button'
import ButtonClassicTwo from '../../../../ui/button/button-classic-two/ButtonClassicTwo'
import Field from '../../../../ui/field/Field'
import styles from './NewPassword.module.scss'

const NewPassword = () => {
    const {req_error, errors, handleSubmit, onSubmit, register, getValues} =
        useNewPassword()

    const validateRepeatPassword = value => {
        const newPassword = getValues('newPassword')
        return value === newPassword || 'Passwords do not match'
    }
    return (
        <div className={styles.block}>
            <div className={styles.passwordField}>
                <div className={styles.title}>
                    <p>New password</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.newPassInput}>
                        <label
                            className={`${
                                errors?.newPassword?.message ? styles.labelError : ''
                            }`}
                        >
                            New password
                        </label>
                        <Field
                            error={req_error || errors?.newPassword?.message}
                            name='newPassword'
                            register={register}
                            options={{
                                required: `You didn't fill this field!`,
                                validate: validateRepeatPassword
                            }}
                            type='password'
                            placeholder={
                                errors?.newPassword?.message
                                    ? errors.newPassword.message
                                    : 'Enter your new pass'
                            }
                            autoComplete='off'
                        />
                    </div>
                    <div className={styles.repeatPassInput}>
                        <label
                            className={`${
                                errors?.repeatPassword?.message ? styles.labelError : ''
                            }`}
                        >
                            Repeat New password
                        </label>
                        <Field
                            error={req_error || errors?.repeatPassword?.message}
                            name='repeatPassword'
                            register={register}
                            options={{
                                required: `You didn't fill this field!`,
                                validate: validateRepeatPassword
                            }}
                            type='password'
                            placeholder={
                                errors?.repeatPassword?.message
                                    ? errors.repeatPassword.message
                                    : 'Repeat new pass'
                            }
                            autoComplete='off'
                        />
                    </div>
                    <div className={styles.button}>
                        <Button onClick={handleSubmit}>Recovery</Button>
                    </div>
                </form>
            </div>
            <div className={styles.twoFa}>
                <div className={styles.secondTitle}>
                    <p>2FA</p>
                </div>
                <div className={styles.buttonGroup}>
                    <ButtonClassicTwo>Edit 2FA</ButtonClassicTwo>
                    <div className={styles.titleToggle}>
                        <p>Active</p>
                        <div className={styles.toggleButton}>
                            <label className={styles.switch}>
                                <input type='checkbox'/>
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword
