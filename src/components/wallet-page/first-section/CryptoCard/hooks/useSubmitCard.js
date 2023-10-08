import {useEffect, useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import {patch_pop_bal} from "../../../../../app/api/protected.api.js";

export const useSubmitCard = (currency) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange'
    })
    const [activeCurrency, setActiveCurrency] = useState(null)
    const [amount, setAmount] = useState(0)
    const [isAmountUpdated, setIsAmountUpdated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = data => {
        // console.log(`Data from ${currency} card:`, data)

        if (data.amount >= 8) {
            setIsLoading(true)
            patch_pop_bal(data.amount).then(r => {
                // console.log(r)
                if (r.status === 200) {
                    window.open(r.data.pay_url, '_blank');

                    setActiveCurrency(currency)
                    setAmount(data.amount)
                    setIsAmountUpdated(true)

                }
            }).catch(e => {
                // console.log(e)
            }).finally(() => {
                setIsLoading(false)
            })
        } else {

        }

    }

    useEffect(() => {
        if (isAmountUpdated) {
            // console.log('Updated amount:', amount)
            setIsAmountUpdated(false)
        }
    }, [amount, isAmountUpdated])

    return useMemo(
        () => ({
            register,
            handleSubmit,
            errors,
            onSubmit,
            activeCurrency,
            amount, isLoading
        }),
        [errors, activeCurrency, amount, isLoading]
    )
}
