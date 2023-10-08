import Notification from './notification/Notification'
import styles from './Page.module.scss'
import {useEffect, useState} from "react";
import {createTrigger} from "trigger-man";
import {get_del_notification, get_notification} from "../../app/api/protected.api.js";

const Page = () => {
    const [loading, setLoading] = useState(true)

    const [list, setList] = useState([])

    useEffect(() => {
        get_not_list()
    }, [])

    function get_not_list() {
        setLoading(true)
        get_notification().then(r => {
            // console.log(r)
            if (r.status === 200) {
                setList(r.data)
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    function del_not(id_n) {
        get_del_notification(id_n).then(r => {
            if (r.status === 200) {
                get_not_list()
                createTrigger("notify");
            }
        })
    }

    if (loading) return <>
        <div className={styles.notificationList}>
            <div className={styles.skeleton}/>
            <div className={styles.skeleton}/>
            <div className={styles.skeleton}/>
            <div className={styles.skeleton}/>
        </div>
    </>

    return (
        <div className={'fade_in'}>
            <div className={styles.notificationList}>
                {list.length > 0 ? list?.map(notification => (
                    <Notification
                        key={notification.id_n}
                        date={notification.date}
                        label={notification.sender}
                        markSvg={notification.sender === 'Important' ? 'Marker-green-icon.svg' : 'Marker-red-icon.svg'}
                        title={notification.header}
                        onClick={() => del_not(notification.id_n)}
                    >
                        <pre>
                        {notification.message}
                        </pre>
                    </Notification>
                )) : <div className={styles.no_data}>
                    No new notifications
                </div>}
            </div>
        </div>
    )
}

export default Page
