import MessengerInfo from './messenger-info/MessengerInfo'
import styles from './MessageSection.module.scss'
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const MessageSection = () => {
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

    return (
        <div className={`${num > 0 ? '' : styles.nodata} ${styles.block}`}>
            <MessengerInfo/>
        </div>
    )
}

export default MessageSection
