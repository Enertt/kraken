import {useEffect, useState} from "react";
import Result from "../result/Result.jsx";
import {get_last_ssn} from "../../../../app/api/protected.api.js";

const LastSSNTable = ({token}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        // Функция очистки интервала при размонтировании компонента

        const timerId = setTimeout(() => {
            if (data.status !== 'DONE') {
                get_ssn_list(token)
            }
            setTimer(timer + 2); // Увеличиваем таймер на 2 каждые 2 секунды
        }, 4000);

        // Функция очистки таймера при размонтировании компонента
        return () => {
            clearTimeout(timerId);
        };
    }, [token, data, timer])

    function get_ssn_list(token) {
        setIsLoading(true)

        get_last_ssn(token).then(r => {
            if (r.status === 200) {
                if (r.data.status === 'DONE') {
                    setData(r.data)
                }
            }
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <Result isLoading={isLoading} data={data}/>
    )
}

export default LastSSNTable
