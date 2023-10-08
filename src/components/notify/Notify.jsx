import { useNavigate } from 'react-router-dom'
import ButtonClassic from '../ui/button/button-classic/ButtonClassic'
import styles from './Notify.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './notification/Notification'
import { markNotificationAsRead } from '../../store/notification/notificationsSlice'

const Notify = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const notifications = useSelector(state => state.notifications)
	const handleNotificationClick = notificationId => {
		dispatch(markNotificationAsRead(notificationId))
	}

	const sortedNotifications = notifications
		.slice()
		.sort((a, b) => new Date(b.date) - new Date(a.date))

	const unreadNotifications = sortedNotifications.filter(
		notification => !notification.read
	)
	const latestUnreadNotifications = unreadNotifications.slice(0, 2)
	return (
		<div className={styles.block}>
			{unreadNotifications.length !== 0 ? (
				latestUnreadNotifications?.map(notification => (
					<Notification
						key={notification.id}
						date={notification.date}
						label={notification.label}
						markSvg={notification.markSvg}
						title={notification.title}
						onClick={() => handleNotificationClick(notification.id)}
					>
						{notification.content}
					</Notification>
				))
			) : (
				<div className={styles.noNotification}>No new notifications</div>
			)}

			<div className={styles.button}>
				<ButtonClassic clickHandler={() => navigate('/notifications')}>
					View All Notifications
				</ButtonClassic>
			</div>
		</div>
	)
}

export default Notify
