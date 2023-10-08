import {useLocation} from 'react-router-dom'
import styles from './Field.module.scss'

const Field = ({register, name, options, error, ...rest}) => {
    const {pathname} = useLocation()
    const handleClick = e => {
        e.target.setAttribute('autocomplete', 'off')
        e.target.placeholder = ''
    }
    return (
        <div>
            <input
                {...register !== undefined ? register(name, options) : {}}
                {...rest}
                className={`${styles.input} ${error ? styles.errorInput : ''} ${
                    pathname === '/support' ? styles.supportInput : styles.input
                }}`}
                onClick={handleClick}
            />
        </div>
    )
}

export default Field
