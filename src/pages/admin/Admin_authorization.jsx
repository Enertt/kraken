import styles from './admin_authorization.module.css';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loader from "../../components/ui/loader/Loader.jsx";
import {post_admin_join} from "../../app/api/admin.api.js";

const AdminAuthorization = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [admin_token, setAdminToken] = useState('');

    const [btn_loading, setBtnLoading] = useState(false);

    useEffect(() => {
        post_admin_join(localStorage.getItem('admin_token')).then(r => {
            console.log(r)
            if (r.status === 200) {
                navigate('/admin')
            }
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        setBtnLoading(true)
        console.log(admin_token)
        post_admin_join(admin_token).then(r => {
            console.log(r)
            if (r.status === 200) {
                localStorage.setItem('admin_token', admin_token)
                window.location.reload()
            }
        }).catch(e => {
            console.log(e)
            setBtnLoading(false)
        })
    }

    if (loading) return <Loader/>

    return (
        <>
            <div className={styles.root}>
                <div className={styles.content}>
                    <h1>Put Your Token</h1>
                    <input value={admin_token} onChange={(e) => {
                        setAdminToken(e.target.value)
                    }}/>
                    <button onClick={handleClick}> {btn_loading ? 'Loading' : 'Join'}</button>
                </div>
            </div>
        </>
    );
};

export default AdminAuthorization;
