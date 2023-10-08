import styles from './Notification.module.scss'

const Notification = ({
                          children,
                          label,
                          date,
                          title,
                          markSvg,
                          onClick
                      }) => {
    return (
        <div
            className={`${styles.block}`}
        >
            <div>
                <img
                    className={`${styles.img} ${
                        markSvg === 'Marker-green-icon.svg' ? styles.marker : undefined
                    }`}
                    src={markSvg}
                    alt='marker'
                    draggable={false}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.header}>
                    <div className={label === 'Important' ? styles.label : styles.label_admin}>{label}</div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{children}</div>
            </div>

            <svg
                onClick={onClick}
                style={{cursor: 'pointer'}}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
            >
                <path
                    fill="#7781a4"
                    strokeMiterlimit="10"
                    d="M14.984 2.486A1 1 0 0014 3.5V4H8.5a1 1 0 00-1.014 1H6a1 1 0 100 2h18a1 1 0 100-2h-1.486A1 1 0 0021.5 4H16v-.5a1 1 0 00-1.016-1.014zM6 9l1.793 15.234A1.997 1.997 0 009.777 26h10.446a1.998 1.998 0 001.984-1.766L24 9z"
                    fontFamily="none"
                    fontSize="none"
                    fontWeight="none"
                    textAnchor="none"
                    transform="scale(8.53333)"
                ></path>
            </svg>
        </div>
    )
}

export default Notification
