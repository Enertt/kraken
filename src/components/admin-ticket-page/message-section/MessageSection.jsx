import MessengerInfo from './messenger-info/MessengerInfo'
import styles from './MessageSection.module.scss'
import MessageBox from './message-box/MessageBox'
const MessageSection = () => {
	return (
		<div className={styles.block}>
			<MessengerInfo />
		</div>
	)
}

export default MessageSection
