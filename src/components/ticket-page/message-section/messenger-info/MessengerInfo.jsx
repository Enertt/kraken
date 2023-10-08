import styles from './MessengerInfo.module.scss'
import profile from '../../../ui/layout/components/MyProfile/assets/profileIcon.svg'
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import MessageBox from "../message-box/MessageBox.jsx";
import Nodata from "../../../Nodata/Nodata.jsx";
import img from '../../assets/Kraken.svg';
import Loader from "../../../ui/loader/Loader.jsx";
import {get_ticket} from "../../../../app/api/public.api.js";

const MessengerInfo = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const location = useLocation();
    const [num, setNum] = useState(0);

    useEffect(() => {
        const num_v = Number(location.search.split('=')[1]);
        if (!isNaN(num_v)) {
            setNum(num_v)
        } else {
            setNum(0)
        }
        console.log(num_v)
    }, [location])

    const [timer, setTimer] = useState(0);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (num > 0) {
                getTicket()
            }
            setTimer(timer + 2);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [num, loading, timer])

    // useEffect(() => {
    //     if (loading) {
    //         getTicket()
    //     }
    // }, [num])

    function getTicket() {
        get_ticket(num).then(r => {
            if (r.status) {
                setList(r.data)
                if (!isScroll) {
                    scrollToBottom()
                }
            }
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }


    const chatMessagesRef = useRef(null);
    const scrollToBottom = () => {

        if (chatMessagesRef.current !== null) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
            // chatMessagesRef.current.scrollTo(0, chatMessagesRef.current.scrollHeight)
        }
    };


    const handleScroll = () => {
        setIsScroll(true);
    };

    const handleScrollEnd = () => {
        setIsScroll(false);
    };

    return (
        <>
            {num === 0 ?
                <Nodata src={img} title={'Choose Ticket'} style={{color: 'white'}}/> : <>

                    <div ref={chatMessagesRef}
                         onScroll={handleScroll}
                         className={styles.hidden}>
                        {
                            loading ? <Loader/> :

                                list.map((e, i) => <div className={styles.block} key={i}>
                                    <div className={styles.block2}>
                                        {e.user === 'admin' && <div></div>}
                                        <div className={styles.info}>
                                            <img src={profile} alt='My profile'/>

                                            <div className={styles.name}>
                                                <p>{e.user}</p>
                                            </div>
                                            <div className={styles.statusInfo}>
                                                <div className={styles.svg}>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='5'
                                                        height='5'
                                                        viewBox='0 0 5 5'
                                                        fill='none'
                                                    >
                                                        <circle cx='2.5' cy='2.5' r='2.5' fill='#68B089'/>
                                                    </svg>
                                                </div>
                                                <div className={styles.status}>
                                                    <p>Online</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.message}>
                                        {e.messages}
                                    </div>

                                </div>)
                        }
                    </div>


                    <MessageBox handleScrollEnd={() => {
                        // scrollToBottom();
                        handleScrollEnd();
                    }} id={num} getTicket={getTicket}/>
                </>}
        </>
    )
}

export default MessengerInfo
