import styles from './PhoneTable.module.scss'
const PhoneTable = () => {
	return (
		<div>
			<div className={styles.title}>
				<p>Search history</p>
			</div>
			<div className={styles.tableHead}>
				<div className={styles.one}>
					<span>#Order</span>
				</div>
				<div className={styles.two}>
					<span>Date</span>
				</div>
				<div className={styles.three}>
					<span>Number</span>
				</div>
				<div className={styles.four}>
					<span>Info</span>
				</div>
				<div className={styles.five}>
					<span>Additional info</span>
				</div>
				<div className={styles.six}>
					<span>Status</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1464631</span>
				</div>
				<div className={styles.two}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.three}>
					<span>+33330455605</span>
				</div>
				<div className={styles.four}>
					<span>Lorem ipsum dolor sit amet con In.</span>
				</div>
				<div className={styles.five}>
					<span>Lorem ipsum dolor sit amet cons.</span>
				</div>
				<div className={styles.six}>
					<span className={styles.statusConfirm}>Confirm</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1464631</span>
				</div>
				<div className={styles.two}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.three}>
					<span>+33330455605</span>
				</div>
				<div className={styles.four}>
					<span>Lorem ipsum dolor sit amet In.</span>
				</div>
				<div className={styles.five}>
					<span>Lorem ipsum dolor sit etur. In.</span>
				</div>
				<div className={styles.six}>
					<span className={styles.statusCanceled}>Canceled</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1464631</span>
				</div>
				<div className={styles.two}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.three}>
					<span>+33330455605</span>
				</div>
				<div className={styles.four}>
					<span>Lorem ipsum it amet consectetur. In.</span>
				</div>
				<div className={styles.five}>
					<span>Lorem ipsum dolor setur. In.</span>
				</div>
				<div className={styles.six}>
					<span className={styles.statusCanceled}>Canceled</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1464631</span>
				</div>
				<div className={styles.two}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.three}>
					<span>+33330455605</span>
				</div>
				<div className={styles.four}>
					<span>Lolor sit amet coetur. In.</span>
				</div>
				<div className={styles.five}>
					<span>Lorem ips amet consectetur. In.</span>
				</div>
				<div className={styles.six}>
					<span className={styles.statusConfirm}>Confirm</span>
				</div>
			</div>
		</div>
	)
}

export default PhoneTable
