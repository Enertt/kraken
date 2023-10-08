import styles from './MessengerInfo.module.scss'
import profile from '../../../ui/layout/components/MyProfile/assets/profileIcon.svg'
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import MessageBox from "../message-box/MessageBox.jsx";
import {get_ticket} from "../../../../app/api/public.api.js";

const MessengerInfo = () => {
    const location = useLocation();
    const [num, setNum] = useState(0);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        // setLoading(true)
        // setList([])
        const num_v = Number(location.search.split('=')[1]);
        if (!isNaN(num_v)) {
            setNum(num_v)
        } else {
            setNum(0)
        }
        console.log(num_v)
    }, [location])

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if(num > 0) {
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
            console.log(r)
            if (r.status) {
                setList(r.data)
            }
        }).catch(e => {
            console.log(e)

        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            {num === 0 ?
                <div className={styles.message} style={{textAlign: "center", fontSize: 24}}>Choose Ticket</div> : <>

                    <div className={styles.hidden}>
                        {
                            loading ? <div style={{color: 'white'}}>Loading</div> :

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


                    <MessageBox id={num} getTicket={getTicket}/>
                </>}
        </>
    )
}

export default MessengerInfo
