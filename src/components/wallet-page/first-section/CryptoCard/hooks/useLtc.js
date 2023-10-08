import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useLtc = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		// console.log(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors]
	)
}
