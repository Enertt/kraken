import styles from './TableSection.module.scss'
import {useEffect, useState} from "react";
import {get_founds_history} from "../../../app/api/protected.api.js";

const TableSection = () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);


    useEffect(() => {
        get_history()
    }, [])

    function get_history() {
        setLoading(true)
        get_founds_history().then(r => {
            // console.log(r)
            setList(r.data)
        }).catch(e => {
            // console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div>
            <div className={styles.title}>
                <p>Balance history</p>
            </div>
            <div className={styles.tableHead}>
                <div className={styles.one}>
                    <span>id</span>
                </div>
                <div className={styles.two}>
                    <span>Date</span>
                </div>
                <div className={styles.four}>
                    <span>Amount $</span>
                </div>

                <div className={styles.eight}>
                    <span>Status</span>
                </div>
            </div>

            {loading ? <>
                    <div className={styles.tableRow}/>
                </> :
                <>
                    {
                        list.map((e) => <div key={e.id_str} className={styles.tableRow}>
                            <div className={styles.one}>
                                <span>{e.id_str}</span>
                            </div>
                            <div className={styles.two}>
                                <span>{e.date}</span>
                            </div>
                            <div className={styles.four}>
                                <span>${e.ammount}</span>
                            </div>

                            <div className={styles.eight}>
                                <span
                                    className={e.status === 'Pending' ?
                                        styles.statusPending : e.status === 'Canceled' ?
                                            styles.statusCanceled : styles.statusConfirm}>
                                    {e.status}
                                </span>
                            </div>

                        </div>)

                    }

                </>
            }


        </div>
    )
}

export default TableSection
