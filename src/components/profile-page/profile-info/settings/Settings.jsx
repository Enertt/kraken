import styles from './Settings.module.scss'
import EditPhoto from './edit-photo/EditPhoto'
import NewPassword from './new-password/NewPassword'
// import WalletSettings from './wallet-settings/WalletSettings'
const Settings = () => {
	return (
		<div className={styles.block}>
			<EditPhoto />
			<div className={styles.blackLine} />
			<div className={styles.liteLine} />
			<NewPassword />
			{/*<div className={styles.blackLine} />*/}
			{/*<div className={styles.liteLine} />*/}
			{/*<WalletSettings />*/}
		</div>
	)
}

export default Settings
