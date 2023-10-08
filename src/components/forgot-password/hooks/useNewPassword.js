import {useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {post_edit_password} from "../../../app/api/protected.api.js";

export const useNewPassword = () => {
    const [req_error, setReqError] = useState();

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        getValues
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = data => {
        // console.log(data)

        if (data.newPassword === data.repeatPassword) {
            post_edit_password(data.newPassword).then(r => {
                // console.log(r)

                if (r.status === 200) {
                    setReqError(false)

                    reset()
                    navigate('/')
                } else {
                    setReqError(true)
                }
            }).catch(e => {
                setReqError(true)

                // console.log(e)
            })
        }
    }

    return useMemo(
        () => ({
            register,
            handleSubmit,
            errors,
            onSubmit,
            getValues,
            req_error
        }),
        [errors]
    )
}
