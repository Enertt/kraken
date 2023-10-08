import styles from './ChatBox.module.scss'
import profile from '../../../ui/layout/components/MyProfile/assets/profileIcon.svg'
import { svgList } from './svg-list'
const ChatBox = ({ name, lastMessage, date, mark, status,onClick }) => {
	const getIconFromSvgList = title => {
		const matchingSvg = svgList.find(svgItem => svgItem.title === title)
		return matchingSvg ? matchingSvg.icon : null
	}
	const icon = getIconFromSvgList(mark)
	return (
		<div className={styles.block} onClick={onClick}>
			<div>
				<img src={profile} alt='My profile' />
			</div>
			{status === 'online' ? (
				<div className={styles.statusOnline} />
			) : (
				<div className={styles.statusOffline} />
			)}
			<div>
				<div className={name === 'Support' ? styles.support : styles.name}>
					<p>{name}</p>
				</div>
				<div
					className={status === 'offline' ? styles.offlineText : styles.text}
				>
					<p>{lastMessage}</p>
				</div>
				<div
					className={status === 'offline' ? styles.offlineDate : styles.date}
				>
					<p>{date}</p>
				</div>
			</div>
			<div className={styles.mark}>{icon}</div>
		</div>
	)
}

export default ChatBox
