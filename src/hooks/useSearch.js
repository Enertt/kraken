import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useSearch = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		// console.log(data)
		reset()
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
