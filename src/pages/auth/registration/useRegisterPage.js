import {useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {post_register} from "../../../app/api/public.api.js";

export const useRegisterPage = (captchaValue) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: 'onChange'
    })
    const navigate = useNavigate()

    const [errorReq, setErrorReq] = useState(false)
    const [errorCap, setErrorCap] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const onSubmit = (data) => {
        // console.log(data)
        if (captchaValue.trim() !== '') {
            if (data.password === data.repeatPassword) {
                post_register(data.login, data.password, data.email).then(r => {
                    if (r.status === 200) {
                        reset()
                        navigate('/successful-registration')
                    } else {
                        setErrorReq(true)
                    }
                }).catch((e) => {
                    console.log(e)
                    setErrorMessage(e.response.data.detail)
                    setErrorReq(true)
                })

            } else {
                setErrorReq(true)
            }
        }else {
            setErrorCap(true)
        }
    }

    return useMemo(
        () => ({
            register,
            handleSubmit,
            errors,
            onSubmit,
            errorReq,
            errorCap,
            errorMessage
        }),
        [errors, errorReq, errorCap, errorMessage]
    )
}
