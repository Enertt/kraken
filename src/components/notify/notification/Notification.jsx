import styles from './Notification.module.scss'
const Notification = ({ children, label, date, title, markSvg, onClick }) => {
	return (
		<div className={styles.block} onClick={onClick}>
			<div>
				<img src={markSvg} alt='marker' />
			</div>
			<div className={styles.info}>
				<div className={styles.header}>
					<div className={styles.label}>{label}</div>
					<div className={styles.date}>{date}</div>
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{children}</div>
			</div>
		</div>
	)
}

export default Notification
