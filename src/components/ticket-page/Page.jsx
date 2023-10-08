import styles from './Page.module.scss'
import ChatList from './chat-list/ChatList'
import MessageSection from './message-section/MessageSection'

const Page = () => {
    return (
        <div className={`fade_in ${styles.page}`}>
            <ChatList/>
            <MessageSection/>
        </div>
    )
}

export default Page
