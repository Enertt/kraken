import styles from './Page.module.scss'
import Form from './support-page-form/Form'
import kraken from '/Kraken.svg'

const Page = () => {
    return (
        <div className={`fade_in ${styles.block}`}>

            <div className={styles.form}>
                <div className={styles.title}>
                    <p>{`Let's Talk`}</p>
                </div>
                <div className={styles.text}>
                    <p>
                        To request a quote or want to meet up for coffee, contacts us
                        directly or fill out the form and we will get back to you promptly
                    </p>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
            <div className={styles.image}>
                <img src={kraken} alt='Kraken'/>
                <div className={styles.ellipse}/>
            </div>
        </div>
    )
}

export default Page
