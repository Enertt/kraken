import React from 'react'
import styles from './Format.module.scss'

const Format = ({ inputValue }) => {
	const formattedValues = inputValue.split('|')

	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>FORMAT:</p>
			</div>
			<div className={styles.stroke}>
				{!inputValue
					? ''
					: formattedValues.map((value, index) => (
							<React.Fragment key={index}>
								<div className={styles.exampleText}>
									<p>{value}</p>
								</div>
								{index < formattedValues.length - 1 && (
									<p className={styles.divide}>|</p>
								)}
							</React.Fragment>
					  ))}
			</div>
		</div>
	)
}

export default Format
