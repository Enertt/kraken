import styles from './Page.module.scss'
import ChatList from './chat-list/ChatList'
// import FilterBar from './filter-bar/FilterBar'
import MessageSection from './message-section/MessageSection'
const Page = () => {
	return (
		<div className={styles.page}>
			{/*<FilterBar />*/}
			<ChatList />
			<MessageSection />
		</div>
	)
}

export default Page
