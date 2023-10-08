import {useEffect, useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

import {useAuth} from '../../../hooks/useAuth.js'

import {TOKEN} from '../../../app/api/app.constants.js'
import {get_token} from "../../../app/api/public.api.js";

export const useLoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: 'onChange'
    })

    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    // const [getToken, {isLoading}] = useGetTokenMutation()

    const [req_error, setReqError] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('')

    const onSubmit = async data => {
        console.log(data)
        if (captchaValue.trim() !== '') {

            get_token(data.username, data.password, captchaValue).then(r => {
                setIsLoading(true)
                if (r.status === 200) {

                    if (r.data.access_token) {
                        localStorage.setItem(TOKEN, r.data.access_token)
                        window.location.reload();
                        // setIsAuth(true)
                        // reset()

                    } else {
                        setReqError(true)
                        setIsAuth(false)
                    }
                } else {
                    setIsLoading(false)
                    setReqError(true)
                    setIsAuth(false)
                }
            }).catch(() => {
                setReqError(true)
                setIsAuth(false)
                setIsLoading(false)
            }).finally(() => {
                setIsLoading(false)
            })

        } else {
            setReqError(true)
        }

    }

    return useMemo(
        () => ({
            register,
            handleSubmit,
            errors,
            // isLoading,
            onSubmit,
            req_error,
            loading,
            setCaptchaValue,
            captchaValue
        }),
        [errors, req_error, loading, captchaValue]
    )
}
