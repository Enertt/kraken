import styles from './AdBanner.module.scss'
const AdBanner = ({ children }) => {
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>{children}</p>
			</div>
		</div>
	)
}

export default AdBanner
