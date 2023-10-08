import styles from './ButtonClassic.module.scss'
const ButtonClassic = ({ children, clickHandler }) => {
	return (
		<div className={styles.button}>
			<button onClick={clickHandler}>{children}</button>
		</div>
	)
}

export default ButtonClassic
