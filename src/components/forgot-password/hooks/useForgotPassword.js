import {useMemo} from 'react'
import {useForm} from 'react-hook-form'

export const useForgotPassword = (captchaValue, sum) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: 'onChange'
    })


    const onSubmit = data => {
        if (captchaValue.trim() !== '') {
            // console.log(data)
            reset()
        } else {
            // console.log('Captcha is not valid')
        }
    }

    return useMemo(
        () => ({
            register,
            handleSubmit,
            errors,
            onSubmit,
            captchaValue
        }),
        [errors]
    )
}
