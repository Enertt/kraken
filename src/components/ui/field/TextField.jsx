import styles from './Field.module.scss'

const TextField = ({ register, name, options, error, ...rest }) => {
	const handleClick = e => {
		e.target.setAttribute('autocomplete', 'off')
		e.target.placeholder = ''
	}
	return (
		<div>
			<textarea
				{...rest}
				className={`${styles.textArea} ${error ? styles.errorInput : ''}`}
				onClick={handleClick}
				style={{ resize: 'none' }}
			/>
		</div>
	)
}

export default TextField
