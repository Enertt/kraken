import styles from './Pagination.module.scss'
const Pagination = () => {
	return (
		<div className={styles.block}>
			<div className={styles.leftArrow}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='8'
					height='14'
					viewBox='0 0 8 14'
					fill='none'
				>
					<path
						d='M7 13L1 7L7 1'
						stroke='#343B54'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<div className={styles.pages}>
				<div className={styles.number}>
					<p>1</p>
				</div>
				<div className={styles.number}>
					<p>2</p>
				</div>
				<div className={styles.number}>
					<p>3</p>
				</div>
			</div>
			<div className={styles.rightArrow}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='8'
					height='14'
					viewBox='0 0 8 14'
					fill='none'
				>
					<path
						d='M1 13L7 7L1 1'
						stroke='#343B54'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	)
}

export default Pagination
