import styles from './SearchField.module.scss'

const SearchField = ({ register, name, options, error, svg, ...rest }) => {
	const handleClick = e => {
		e.target.setAttribute('autocomplete', 'off')
		e.target.placeholder = ''
	}
	return (
		<div className={styles.block}>
			<div className={styles.input}>
				<img src={svg} alt='search' />
				<input
					{...register(name, options)}
					{...rest}
					className={`${styles.searchInput} ${error ? styles.errorInput : ''}`}
					onClick={handleClick}
				/>
			</div>

			<div className={styles.searchButton}>
				<button>Search</button>
			</div>
		</div>
	)
}

export default SearchField
