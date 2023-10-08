import Notification from '../ui/notification/Notification'
import styles from './Page.module.scss'
import ProfileInfo from './profile-info/ProfileInfo'

const Page = () => {
    return (
        <div className={`fade_in ${styles.block}`}>
            <Notification title={'Notification'}>
                Lorem ipsum dolor sit amet consectetur. Dui est odio tellus elementum
                convallis. Ut augue arcu feugiat sociis mauris laoreet tristique. Mauris
                vel consectetur nec sit at. Risus dui risus dignissim sed. Enim sed
                lectus leo mattis ullamcorper tristique volutpat vitae. Tortor urna
                dolor velit commodo fusce netus purus quis venenatis. Gravida eget
                cursus bibendum felis. Ac tellus risus convallis porttitor.
            </Notification>
            <ProfileInfo/>
        </div>
    )
}

export default Page
