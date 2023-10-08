import {useEffect, useState} from "react";
import styles from "./bg.module.scss";
import styles3 from "./bg.module.css";
import styles2 from "../../../components/services-pages/ui/result/Result.module.scss";
import Input from "../../../components/services-pages/ui/input/Input.jsx";
import SearchButton from "../../../components/services-pages/ui/search-button/SearchButton.jsx";
import BGTable from "../../../components/services-pages/ui/table/BGTable.jsx";
import ButtonClassicTwo from "../../../components/ui/button/button-classic-two/ButtonClassicTwo.jsx";
import usePrices from "../../../hooks/usePrices.js";
import {post_bg, post_bg_history} from "../../../app/api/protected.api.js";

const BG = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [postBgError, setPostBGError] = useState(false)
    const [errorInput, setErrorInput] = useState(false)

    const [postBgErrorMessage, setPostBgErrorMessage] = useState('');

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Address, setAddressName] = useState('')
    const [City, setCityName] = useState('')
    const [State, setStateName] = useState('')

    const [token, setToken] = useState('');

    function search() {
        if (FirstName.trim() !== '' && LastName.trim() !== '' && Address.trim() !== '' && City.trim() !== '' && State.trim() !== '') {
            setIsLoading(true);
            setPostBGError(false);
            setErrorInput(false)

            setToken('')
            post_bg(FirstName, LastName, Address, City, State).then((r) => {
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
        post_bg_history().then(r => {
            if (r.status === 200) {
                setListHistory(r.data)
            }
        })
    }

    const {price_loading, prices} = usePrices();

    return (
        <div className={`fade_in ${styles.block}`}>
            <div className={styles.header}>
                <div className={styles.title} style={{marginBottom: 32}}>BG</div>
            </div>
            <>
                {postBgError && <div className={styles3.error}>{postBgErrorMessage}</div>}

                <div className={styles.sectionTwo}>
                    <Input
                        label={'Cheili'}
                        error={errorInput}
                        value={FirstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        name={'First name'}
                        required={'*'}
                        placeholder={'First Name'}
                    />
                    <Input
                        label={'Jackson'}
                        error={errorInput}

                        value={LastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        name={'Last Name'}
                        required={'*'}
                        placeholder={'Last Name'}
                    />

                </div>
                <div className={styles.sectionThree}>

                    <Input value={State}
                           error={errorInput}
                           label={'NV'}
                           onChange={(e) => {
                               setStateName(e.target.value)
                           }} name={'State'} required={'*'} placeholder={'State'}/>

                    <Input value={City}
                           error={errorInput}
                           label={'Spring Creek'}
                           onChange={(e) => {
                               setCityName(e.target.value)
                           }} name={'City'} required={'*'} placeholder={'City'}/>

                    <Input value={Address}
                           error={errorInput}
                           label={'951 Alpine Dr'}
                           onChange={(e) => {
                               setAddressName(e.target.value)
                           }} name={'Address'} required={'*'} placeholder={'Address'}/>

                </div>
                <SearchButton disabled={price_loading} clickHandler={() => search()}
                              price={price_loading ? 'Loading...' : `${prices.bg} $`}
                              isLoading={isLoading}/>

                {token.trim() !== '' &&
                    <>
                        <div className={styles2.title}>
                            <p>Data Information</p>
                        </div>
                        <BGTable token={token}/>
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
                                    styles2.statusCanceled : styles2.statusConfirm}>
                                    {e.status}
                                </span>
                    </div>
                </div>)}

            </>
        </div>
    )
}

export default BG;
