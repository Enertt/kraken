import styles from './ChatList.module.scss'
import ChatBox from './chat-box/ChatBox'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {post_admin_list_tickets} from "../../../app/api/admin.api.js";

const ChatList = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [list, setList] = useState([]);

    useEffect(() => {
        getChatList();
    }, [])

    function getChatList() {
        setLoading(true)
        post_admin_list_tickets().then(r => {
            console.log(r)
            if (r.status === 200) {
                setList(r.data)
            }
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className={styles.block}>
            <div className={styles.chatBoxList}>
                {loading ? <div style={{color: 'white'}}>Loading</div> : <>
                    {list.length <= 0 && <div style={{color: 'white'}}>No tickets</div>}
                    {list.map((e, i) => <ChatBox
                        onClick={() => {
                            navigate(`/admin/tickets?ticket=${e.id}`)
                        }}
                        key={i}
                        name={`${e.subject}`}
                        lastMessage={`${e.last_message}...`}
                        mark={e.status === 'open' ? 'warning' : 'security'}
                    />)}
                </>}
            </div>
        </div>
    )
}

export default ChatList
