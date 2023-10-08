import FundsField from '../../../ui/field/funds-field/FundsField'
import styles from './CryptoCard.module.scss'
import {useSubmitCard} from './hooks/useSubmitCard'
import ltcActive from './assets/LTC-active.svg'
import btcActive from './assets/BTC-active.svg'
import usdtActive from './assets/USDT-active.svg'

const CryptoCard = ({img, children, currency, setFormSubmitted}) => {
    const {isLoading, register, handleSubmit, onSubmit, activeCurrency, errors} =
        useSubmitCard(currency, setFormSubmitted)

    let activeImage = null
    if (activeCurrency === 'BTC') {
        activeImage = btcActive
    } else if (activeCurrency === 'USDT') {
        activeImage = usdtActive
    } else if (activeCurrency === 'LTC') {
        activeImage = ltcActive
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.title}>
                    <p style={{minHeight: 19}}>{children}</p>
                </div>
                <div className={activeImage ? styles.activeImage : styles.image}>
                    <img src={activeImage || img} alt='image'/>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FundsField
                            isLoading={isLoading}
                            error={errors?.question?.message}
                            name='amount'
                            register={register}
                            options={{
                                required: `You didn't fill this field!`,
                                min: {value: 8, message: 'Must be more 8'},
                            }}
                            type='text'
                            placeholder={
                                errors?.question?.message
                                    ? errors.question.message
                                    : '$8.00 (min)'
                            }
                            autoComplete='off'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CryptoCard
