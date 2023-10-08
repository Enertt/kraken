import TransferField from './TransferField/TransferField'
import styles from './WalletSettings.module.scss'
// import btcIcon from '../../../../wallet-page/second-section/assets/BTC-currency.svg'
import ButtonClassicTwo from '../../../../ui/button/button-classic-two/ButtonClassicTwo'
const WalletSettings = () => {
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>WalletSettings</p>
			</div>
			<div className={styles.list}>
				<div className={styles.transferField}>
					<label>BTC Wallet</label>
					<div className={styles.field}>
						<TransferField
							currency='BTC'
							link='TFAmjgickRCqDJYURG4hooUFYyWZDk2rpm'
						/>
						<ButtonClassicTwo>SAVE</ButtonClassicTwo>
					</div>
				</div>
				<div className={styles.transferField}>
					<label>USDT Wallet</label>
					<div className={styles.field}>
						<TransferField
							currency='TRC20'
							link='TFAmjgickRCqDJYURG4hooUFYyWZDk2rpm'
						/>
						<ButtonClassicTwo>SAVE</ButtonClassicTwo>
					</div>
				</div>
				<div className={styles.transferField}>
					<label>LTC Wallet</label>
					<div className={styles.field}>
						<TransferField
							currency='LTC'
							link='TFAmjgickRCqDJYURG4hooUFYyWZDk2rpm'
						/>
						<ButtonClassicTwo>SAVE</ButtonClassicTwo>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WalletSettings
