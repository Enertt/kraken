import {useEffect, useState} from "react";
import {post_reverse_ssn, post_reverse_ssn_history} from "../../../app/api/protected.api.js";
import styles from "./SsnReverse.module.scss";
import styles3 from "./SsnReverse.module.css";
import styles2 from "../../../components/services-pages/ui/result/Result.module.scss";
import Input from "../../../components/services-pages/ui/input/Input.jsx";
import SearchButton from "../../../components/services-pages/ui/search-button/SearchButton.jsx";
import SSNReverseTable from "../../../components/services-pages/ui/table/SSNReverseTable.jsx";
import ButtonClassicTwo from "../../../components/ui/button/button-classic-two/ButtonClassicTwo.jsx";
import usePrices from "../../../hooks/usePrices.js";

const SsnReverse = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [postBgError, setPostBGError] = useState(false)
    const [errorInput, setErrorInput] = useState(false)

    const [postBgErrorMessage, setPostBgErrorMessage] = useState('');

    const [ssn, setSSN] = useState('')

    const [token, setToken] = useState('');

    function search() {
        if (ssn.trim() !== '') {
            setIsLoading(true);
            setPostBGError(false);
            setErrorInput(false)
            setToken('')

            post_reverse_ssn(ssn).then((r) => {
                if (r.status === 200) {
                    setToken(r.data)
                } else {
                    setPostBGError(true)
                }
            }).catch((e) => {
                setPostBgErrorMessage(e.response.data.detail)
                setPostBGError(true)
            }).finally(() => {
                setIsLoading(false)
            })
        } else {
            setErrorInput(true)
        }
    }

    const [listHistory, setListHistory] = useState([])

    useEffect(() => {
        get_history()
    }, [])

    function get_history() {
        post_reverse_ssn_history().then(r => {
            if (r.status === 200) {
                setListHistory(r.data)
            }
        })
    }

    const {price_loading, prices} = usePrices();

    return (
        <div className={`fade_in ${styles.block}`}>
            <div className={styles.header}>
                <div className={styles.title} style={{marginBottom: 32}}>SSN Reverse</div>
            </div>
            <>
                {postBgError && <div className={styles3.error}>{postBgErrorMessage}</div>}

                <div className={styles.sectionTwo}>
                    <Input
                        label={'680-48-2772'}
                        error={errorInput}
                        value={ssn}
                        onChange={(e) => {
                            setSSN(e.target.value)
                        }}
                        name={'SSN'}
                        required={'*'}
                        placeholder={'Enter SSN'}
                    />
                </div>

                <SearchButton disabled={price_loading} clickHandler={() => search()}
                              price={price_loading ? 'Loading...' : `${prices.ssn_reverse} $`}
                              isLoading={isLoading}/>


                {token.trim() !== '' &&
                    <>
                        <div className={styles2.title}>
                            <p>Data Information</p>
                        </div>
                        <SSNReverseTable token={token}/>
                    </>
                }

                <div className={styles2.title}>
                    <p>Search history</p>
                </div>

                <div className={styles2.tableHead}>
                    <div className={styles2.one}>
                        <span>Name</span>
                    </div>
                    <div className={styles2.two}>
                        <span>Date</span>
                    </div>
                    <div className={styles2.three}>
                        <span>Token</span>
                    </div>
                    <div className={styles2.five}>
                        <span>Status</span>
                    </div>
                </div>

                {listHistory.length > 0 && listHistory.map(e => <div key={e.token} className={styles2.tableRow}>

                    <div className={styles2.two}>
                        <span>{e.name}</span>
                    </div>
                    <div className={styles2.three}>
                        <span>{e.date}</span>
                    </div>
                    <div className={styles2.four}>
                        <ButtonClassicTwo clickHandler={() => setToken(e.token)}>See more</ButtonClassicTwo>
                    </div>
                    <div className={styles2.five}>

                        <span
                            className={e.status === 'Pending' ?
                                styles2.statusPending : e.status === 'Canceled' ?
                                    styles2.statusCanceled : styles2.statusConfirm}
                        >
                                    {e.status}
                        </span>
                    </div>

                </div>)}
            </>
        </div>
    )
}

export default SsnReverse
