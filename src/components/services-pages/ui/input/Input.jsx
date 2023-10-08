import styles from './Input.module.scss'

const Input = ({name, required = null, placeholder, error, label, ...rest}) => {
    return (
        <div className={styles.block}>
            <div className={styles.name}>
                <p>
                    {name} {label ? `( e.g. ${label})` : ''} <span>{required}</span>
                </p>
            </div>
            <div style={error ? {border: '1px #dd4646 solid'} : {}} className={styles.input}>
                <input {...rest} type='text' placeholder={placeholder}/>
            </div>
            {/*<div className={styles.name}>*/}
            {/*    <p>*/}

            {/*    </p>*/}
            {/*</div>*/}
        </div>
    )
}

export default Input
