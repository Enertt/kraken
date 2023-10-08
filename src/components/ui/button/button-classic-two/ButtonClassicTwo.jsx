import styles from './ButtonClassicTwo.module.scss'
const ButtonClassicTwo = ({ children, clickHandler }) => {
	return (
		<div className={styles.button}>
			<button onClick={clickHandler}>{children}</button>
		</div>
	)
}

export default ButtonClassicTwo
