import styles from './Button.module.scss'

const Button = ({children, type, clickHandler, disabled}) => {
    return (
        <div className={styles.button}>
            <button type={type} onClick={clickHandler} disabled={disabled}>
                <p>{children}</p>
            </button>
        </div>
    )
}

export default Button
