import styles from './ProfileData.module.scss'
const ProfileData = ({ svg, title, amount, purpose }) => {
	let blockClass

	if (purpose === 'balance') {
		blockClass = styles.blockBalance
	} else if (purpose === 'invite') {
		blockClass = styles.blockInvite
	} else if (purpose === 'earn') {
		blockClass = styles.blockEarn
	}
	return (
		<div className={blockClass}>
			<div className={styles.firstSection}>
				<div>
					<img src={svg} alt='icon' />
				</div>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
			</div>
			<div className={styles.amount}>
				<p>{amount}</p>
			</div>
		</div>
	)
}

export default ProfileData
