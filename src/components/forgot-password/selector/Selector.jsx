import styles from './Selector.module.scss'
const Selector = ({ children, svg, title, selected = null, onClick }) => {
	return (
		<div
			className={`${selected ? styles.blockActive : styles.blockDisable}`}
			onClick={onClick}
		>
			<div className={styles.range}>
				<img src={svg} alt='icon' />
			</div>
			<div className={styles.infoSection}>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
				<div className={styles.text}>
					<p>{children}</p>
				</div>
			</div>
			<div className={styles.checkBox}>
				{selected && <img src='Check-icon.svg' alt='check' />}
			</div>
		</div>
	)
}

export default Selector
