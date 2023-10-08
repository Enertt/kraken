import {listItems} from './listItems'
import styles from './List.module.scss'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState,} from 'react'
import {useTrigger} from "trigger-man";
import BalanceDisplay from "../../../balance/BalanceDisplay.jsx";
import {get_count_notification} from "../../../../../app/api/protected.api.js";

const List = () => {
    const navigate = useNavigate()

    const [unreadNotificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        getNotCount();
    }, [])

    useTrigger('notify', () => {
        getNotCount();
    });

    function getNotCount() {
        get_count_notification().then(r => {
            setNotificationCount(r.data)
        })
    }

    return (
        <div className={styles.list}>
            {listItems.map(item => {
                return (
                    <div
                        className={
                            (item.text.includes('$') ? styles.active : '', styles.listItem)
                        }
                        key={item.id}
                        onClick={() => {
                            navigate(item.to)

                            // if (item.title === 'Notify') {
                            // 	handleNotifyClick()
                            // } else {
                            // 	navigate(item.to)
                            // }
                        }}
                    >
                        <div>{item.icon}</div>
                        <div>
                            <h3>{item.title}</h3>
                            <div
                                className={item.text.includes('$') ? styles.money : styles.text}
                            >

                                {item.text.includes('No notification')
                                    ? unreadNotificationCount === 0
                                        ? 'No notifications'
                                        : `${unreadNotificationCount} notifications`
                                    : item.text.includes('$') ? "" : item.text}
                                {item.text.includes('$') && <BalanceDisplay/>}
                            </div>
                        </div>
                        {item.title === 'Notify' && unreadNotificationCount > 0 && (
                            <div className={styles.notificationCount}>
                                {unreadNotificationCount}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default List
