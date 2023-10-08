import styles from './Field.module.scss'

const VerifyField = ({ register, name, options, error, onVerify, ...rest }) => {
	const handleClick = e => {
		e.target.setAttribute('autocomplete', 'off')
		e.target.placeholder = ''
	}

	const handleChange = e => {
		const value = e.target.value.trim()
		onVerify(value)
	}

	return (
		<div>
			<input
				{...register(name, options)}
				{...rest}
				className={`${styles.input} ${error ? styles.errorInput : ''}`}
				onClick={handleClick}
				onChange={handleChange}
			/>
		</div>
	)
}

export default VerifyField
