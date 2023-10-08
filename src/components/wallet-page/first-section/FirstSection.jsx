import CryptoCard from './CryptoCard/CryptoCard'
import styles from './FirstSection.module.scss'
import chest from '/Treasure-chest.svg'
import btcDisable from './CryptoCard/assets/money_icon.svg'
import {useGetUserBalanceQuery} from '../../../app/api/api.js'
import BalanceDisplay from "../../ui/balance/BalanceDisplay.jsx";

const FirstSection = () => {
    const {data} = useGetUserBalanceQuery()
    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <div className={styles.sectionOne}>
                    <div className={styles.img}>
                        <img src={chest} alt='chest'/>
                    </div>
                    <div className={styles.text}>
                        <p>My balance</p>
                    </div>
                    <div className={styles.amount}>
                        <BalanceDisplay/>
                    </div>
                </div>
                <div className={styles.sectionTwo}>
                    <div className={styles.cardGreen}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='26'
                            height='26'
                            viewBox='0 0 26 26'
                            fill='none'
                        >
                            <g clipPath='url(#clip0_45_8136)'>
                                <path
                                    d='M0 10.1891H8.80278V12.0236H0V10.1891Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M23.7988 2.87146C23.9754 3.24602 24.0746 3.66395 24.0746 4.10478V8.66565H25.9996V5.8737C25.9996 4.46777 25.0732 3.27446 23.7988 2.87146Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M24.1296 13.547V19.5964H23.3679C22.876 19.5964 22.4759 19.9966 22.4759 20.4884V21.2501H3.52407V20.4884C3.52407 19.9965 3.12391 19.5964 2.63209 19.5964H1.87038V13.547H0V23.2744H26V13.547H24.1296Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M13 15.5579C14.4743 15.5579 15.6737 14.3584 15.6737 12.8841V10.1891H10.3262V12.8841C10.3262 14.3584 11.5256 15.5579 13 15.5579ZM12.2264 11.7423H13.7498V13.2658H12.2264V11.7423Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M4.92425 19.7267H21.0753C21.3152 19.0065 21.8858 18.436 22.606 18.196V13.547H17.1442C16.8253 15.5474 15.0886 17.0813 12.9997 17.0813C10.9109 17.0813 9.17419 15.5474 8.85533 13.547H3.39355V18.196C4.11373 18.436 4.68431 19.0066 4.92425 19.7267Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M3.44824 4.1048V8.66567H22.5514V4.1048C22.5514 3.3443 21.9327 2.72559 21.1722 2.72559H4.82746C4.06696 2.72554 3.44824 3.34425 3.44824 4.1048Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M0 8.6656H1.92497V4.10478C1.92497 3.66395 2.02419 3.24602 2.20076 2.87146C0.926453 3.27446 0 4.46777 0 5.87365L0 8.6656Z'
                                    fill='#89B877'
                                />
                                <path
                                    d='M17.1973 10.1891H26V12.0236H17.1973V10.1891Z'
                                    fill='#89B877'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_45_8136'>
                                    <rect width='26' height='26' fill='white'/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={styles.text}>Total deposits</p>
                        <p className={styles.amount}>${data?.total_recived}</p>
                    </div>
                    <div className={styles.cardRed}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='26'
                            height='26'
                            viewBox='0 0 26 26'
                            fill='none'
                        >
                            <g clipPath='url(#clip0_45_8151)'>
                                <path
                                    d='M0 10.1891H8.80278V12.0236H0V10.1891Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M23.7988 2.87146C23.9754 3.24602 24.0746 3.66395 24.0746 4.10478V8.66565H25.9996V5.8737C25.9996 4.46777 25.0732 3.27446 23.7988 2.87146Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M24.1296 13.547V19.5964H23.3679C22.876 19.5964 22.4759 19.9966 22.4759 20.4884V21.2501H3.52407V20.4884C3.52407 19.9965 3.12391 19.5964 2.63209 19.5964H1.87038V13.547H0V23.2744H26V13.547H24.1296Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M13 15.5579C14.4743 15.5579 15.6737 14.3584 15.6737 12.8841V10.1891H10.3262V12.8841C10.3262 14.3584 11.5256 15.5579 13 15.5579ZM12.2264 11.7423H13.7498V13.2658H12.2264V11.7423Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M4.92425 19.7267H21.0753C21.3152 19.0065 21.8858 18.436 22.606 18.196V13.547H17.1442C16.8253 15.5474 15.0886 17.0813 12.9997 17.0813C10.9109 17.0813 9.17419 15.5474 8.85533 13.547H3.39355V18.196C4.11373 18.436 4.68431 19.0066 4.92425 19.7267Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M3.44824 4.1048V8.66567H22.5514V4.1048C22.5514 3.3443 21.9327 2.72559 21.1722 2.72559H4.82746C4.06696 2.72554 3.44824 3.34425 3.44824 4.1048Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M0 8.6656H1.92497V4.10478C1.92497 3.66395 2.02419 3.24602 2.20076 2.87146C0.926453 3.27446 0 4.46777 0 5.87365L0 8.6656Z'
                                    fill='#B87777'
                                />
                                <path
                                    d='M17.1973 10.1891H26V12.0236H17.1973V10.1891Z'
                                    fill='#B87777'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_45_8151'>
                                    <rect width='26' height='26' fill='white'/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={styles.text}>Total spent</p>
                        {data?.total_spent === '0' ? (
                            <p className={styles.amount}>${data?.total_spent}</p>
                        ) : (
                            <p className={styles.amount}>-${data?.total_spent}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.cardsList}>
                <CryptoCard
                    img={btcDisable}
                    currency='BTC'
                />
            </div>
        </div>
    )
}

export default FirstSection
