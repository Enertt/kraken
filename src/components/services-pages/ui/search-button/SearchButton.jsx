import styles from './SearchButton.module.scss'

const SearchButton = ({clickHandler, price, isLoading, disabled}) => {
    return (
        <div className={styles.button}>
            <button onClick={clickHandler} disabled={disabled}>
                <div className={styles.section}>
                    <div className={styles.text}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='26'
                            height='26'
                            viewBox='0 0 26 26'
                            fill='none'
                        >
                            <path
                                d='M22.75 22.75L16.25 16.25M3.25 10.8333C3.25 11.8292 3.44615 12.8153 3.82725 13.7354C4.20835 14.6554 4.76693 15.4914 5.47111 16.1956C6.17528 16.8997 7.01127 17.4583 7.93132 17.8394C8.85137 18.2205 9.83748 18.4167 10.8333 18.4167C11.8292 18.4167 12.8153 18.2205 13.7354 17.8394C14.6554 17.4583 15.4914 16.8997 16.1956 16.1956C16.8997 15.4914 17.4583 14.6554 17.8394 13.7354C18.2205 12.8153 18.4167 11.8292 18.4167 10.8333C18.4167 9.83748 18.2205 8.85137 17.8394 7.93132C17.4583 7.01127 16.8997 6.17528 16.1956 5.47111C15.4914 4.76693 14.6554 4.20834 13.7354 3.82725C12.8153 3.44615 11.8292 3.25 10.8333 3.25C9.83748 3.25 8.85137 3.44615 7.93132 3.82725C7.01127 4.20834 6.17528 4.76693 5.47111 5.47111C4.76693 6.17528 4.20835 7.01127 3.82725 7.93132C3.44615 8.85137 3.25 9.83748 3.25 10.8333Z'
                                stroke='#FFEFB7'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <p>{isLoading ? "Loading..." : "Search"}</p>
                    </div>
                    <div className={styles.price}>
                        <p>{price}</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default SearchButton
