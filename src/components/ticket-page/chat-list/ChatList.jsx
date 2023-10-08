import styles from './ChatList.module.scss'
import ChatBox from './chat-box/ChatBox'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Nodata from "../../Nodata/Nodata.jsx";
import img from '../assets/Kraken-2.svg';
import Loader from "../../ui/loader/Loader.jsx";
import {get_list_tickets} from "../../../app/api/protected.api.js";

const ChatList = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [list, setList] = useState([]);

    useEffect(() => {
        getChatList();
    }, [])

    function getChatList() {
        setLoading(true)
        get_list_tickets().then(r => {
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
        <div className={styles.chatBoxList}>
            {loading ? <Loader/> : <>

                {list.length <= 0 && <Nodata src={img} title={'No tickets'} style={{color: 'white'}}/>}

                {list.map((e, i) => <ChatBox
                    onClick={() => {
                        navigate(`/tickets?ticket=${e.id}`)
                    }}
                    key={i}
                    name={`${e.subject}`}
                    lastMessage={`${e.last_message}...`}
                    mark={e.status === 'open' ? 'warning' : 'security'}
                />)}
            </>}
        </div>
    )
}

export default ChatList
