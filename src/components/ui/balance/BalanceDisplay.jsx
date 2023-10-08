import {useEffect, useState} from 'react';
import {get_balance} from "../../../app/api/protected.api.js";

const BalanceDisplay = () => {

    const [data, setData] = useState(Number(localStorage.getItem('balance')) || 0);

    const [timer, setTimer] = useState(0);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setTimer(timer + 2);
            get_balance_req()
        }, 2000);


        return () => {
            clearTimeout(timerId);
        };
    }, [timer])

    function get_balance_req() {
        get_balance().then(r => {
            if (r.status === 200) {
                setData(r.data.balance)
                localStorage.setItem('balance', r.data.balance)
            }
        })
    }

    return (
        <span style={{color: ' #498a57'}}>
            ${data}
        </span>
    );
};

export default BalanceDisplay;
