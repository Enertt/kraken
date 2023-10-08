import { useSearch } from '../../../hooks/useSearch'
import SearchField from '../../ui/field/search-field/SearchField'
import search from '/Search-icon.svg'

const Form = () => {
	const { errors, handleSubmit, onSubmit, register } = useSearch()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SearchField
				error={errors?.question?.message}
				name='question'
				register={register}
				options={{
					required: `You didn't fill this field!`
				}}
				type='text'
				placeholder={
					errors?.question?.message
						? errors.question.message
						: 'Ask a question....'
				}
				autoComplete='off'
				svg={search}
			/>
		</form>
	)
}

export default Form
