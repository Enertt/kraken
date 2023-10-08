import {useState} from 'react'
import styles from './FundsField.module.scss'

const FundsField = ({register, name, options, error, isLoading, ...rest}) => {
    const [inputValue, setInputValue] = useState('')


    const handleClick = e => {
        e.target.setAttribute('autocomplete', 'off')
        e.target.placeholder = ''
    }
    const handleChange = e => {
        // console.log(inputValue < 8)
        setInputValue(e.target.value)
    }
    return (
        <div className={styles.block}>
            <input
                {...register(name, options)}
                {...rest}
                className={`${styles.input} ${error ? styles.errorInput : ''}`}
                onClick={handleClick}
                onChange={handleChange}
            />
            <button
                className={!inputValue || inputValue < 8 ?  '' : styles.activeButton}
                disabled={!inputValue || inputValue < 8}
            >
                {isLoading ? "Loading..." : "Add funds"}
            </button>
        </div>
    )
}

export default FundsField
