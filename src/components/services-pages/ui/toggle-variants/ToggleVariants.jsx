import styles from './ToggleVariants.module.scss'

const ToggleButton = ({ selectedOption, setSelectedOption }) => {
	const handleToggle = () => {
		setSelectedOption(selectedOption === 'Single' ? 'Batch' : 'Single')
	}

	return (
		<div className={styles.block}>
			<p className={styles.name}>Variants</p>
			<div className={styles.toggleButton}>
				<button
					className={`${styles.optionButton} ${
						selectedOption === 'Single' ? styles.active : ''
					}`}
					onClick={handleToggle}
				>
					Single
				</button>
				<div className={styles.gap} />
				<button
					className={`${styles.optionButton} ${
						selectedOption === 'Batch' ? styles.active : ''
					}`}
					onClick={handleToggle}
				>
					Batch
				</button>
			</div>
		</div>
	)
}

export default ToggleButton
