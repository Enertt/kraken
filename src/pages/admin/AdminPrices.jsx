import styles from "./admin.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../../components/ui/loader/Loader.jsx";
import usePrices from "../../hooks/usePrices.js";
import AdminHomeBtn from "./AdminHomeBtn.jsx";
import {post_admin_join, post_edit_prices} from "../../app/api/admin.api.js";

const AdminPrices = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        post_admin_join(localStorage.getItem('admin_token')).then(r => {
            console.log(r)
            if (r.status !== 200) {
                navigate('/admin/login')
            }
        }).catch(e => {
            console.log(e)
            navigate('/admin/login')
        }).finally(() => {
            setLoading(false)
        })
    }, [])


    const [price_loading2, setPriceLoading2] = useState(false);
    const [ok, setOk] = useState(false);
    const [error, setError] = useState(false);

    const [ssn_full, set_ssn_full] = useState(0);
    const [ssn_last, set_ssn_last] = useState(0);
    const [ssn_reverse, set_ssn_reverse] = useState(0);
    const [bg, set_bg] = useState(0);
    const [dl, set_dl] = useState(0);
    const [dob, set_dob] = useState(0);

    function handleSubmit() {
        setPriceLoading2(true)
        setError(false)
        setOk(false)

        post_edit_prices(ssn_full,
            ssn_last,
            ssn_reverse,
            bg,
            dl,
            dob).then(r => {
            console.log(r)
            if (r.status === 200) {
                setOk(true)
            } else {
                setError(true)
            }
        }).catch(e => {
            console.log(e)
            setError(true)
        }).finally(() => {
            setPriceLoading2(false)
        })
    }

    const {prices, price_loading} = usePrices();


    useEffect(() => {
        set_ssn_full(prices.ssn_full)
        set_ssn_last(prices.ssn_last)
        set_ssn_reverse(prices.ssn_reverse)
        set_bg(prices.bg)
        set_dl(prices.dl)
        set_dob(prices.dob)

    }, [prices])


    if (loading) return <Loader/>

    return (
        <div className={styles.root}>
            <AdminHomeBtn/>
            <h1>Admin Prices</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}>
                <div style={{color: 'white', marginBottom: 16}}>Enter SSN FUll Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={ssn_full}
                       onChange={(e) => set_ssn_full(e.target.value)}
                       placeholder={'Enter SSN FUll Price'}
                       required
                />

                <div style={{color: 'white', marginBottom: 16}}>Enter SSN LAST Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={ssn_last}
                       onChange={(e) => set_ssn_last(e.target.value)}
                       placeholder={'Enter SSN LAST Price'}
                       required
                />

                <div style={{color: 'white', marginBottom: 16}}>Enter SSN Reverse Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={ssn_reverse}
                       onChange={(e) => set_ssn_reverse(e.target.value)}
                       placeholder={'Enter SSN Reverse Price'}
                       required
                />

                <div style={{color: 'white', marginBottom: 16}}>Enter BG Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={bg}
                       onChange={(e) => set_bg(e.target.value)}
                       placeholder={'Enter BG Price'}
                       required
                />

                <div style={{color: 'white', marginBottom: 16}}>Enter DL Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={dl}
                       required
                       onChange={(e) => set_dl(e.target.value)}
                       placeholder={'Enter DL Price'}
                />

                <div style={{color: 'white', marginBottom: 16}}>Enter DOB Price</div>
                <input type="number"
                       style={{marginBottom: 16}}
                       value={dob}
                       required
                       onChange={(e) => set_dob(e.target.value)}
                       placeholder={'Enter BG Price'}
                />

                <div>
                    <button type={'submit'}
                            disabled={price_loading || price_loading2}>{price_loading || price_loading2 ? 'Loading' : 'Change'}</button>
                </div>
            </form>

            {ok && <div style={{color: "green", marginTop: 16}}>
                {'Successfully Changed'}
            </div>
            }

            {error && <div style={{color: "red", marginTop: 16}}>
                {'Error'}
            </div>
            }
        </div>
    );
};

export default AdminPrices;
