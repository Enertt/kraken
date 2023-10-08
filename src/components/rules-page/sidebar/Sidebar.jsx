import styles from './Sidebar.module.scss'
const Sidebar = () => {
	return (
		<div className={styles.section}>
			<div className={styles.title}>RULES</div>
			<div className={styles.list}>
				<div className={styles.option}>
					<p>Name of the rules section</p>
				</div>
				<div className={styles.option}>
					<p>Name of the rules section</p>
				</div>
				<div className={styles.option}>
					<p>Name of the rules section</p>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
