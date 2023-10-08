import styles from './Block.module.scss'
const Block = ({ children }) => {
	return (
		<div className={styles.block}>
			<div className={styles.line} />
			<div className={styles.text}>
				<p>{children}</p>
			</div>
		</div>
	)
}

export default Block
