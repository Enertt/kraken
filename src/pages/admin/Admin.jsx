import styles from './admin.module.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../../components/ui/loader/Loader.jsx";
import {post_admin_join} from "../../app/api/admin.api.js";


const Admin = () => {
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

    if (loading) return <Loader/>

    return (
        <div className={styles.root}>
            <h1>Admin Page</h1>

            {/* {isAdminAuth ? <>
                <h1>Admin is auth</h1>
            </> : <>
                <h1>Admin is not auth</h1>
                <button onClick={() => setIsAdminAuth(true)}>Fake Auth</button>
            </>} */}

            <div className={styles.buttonsWrapper}>
                <div className={styles.wrapperRow}>
                    <div className={styles.buttonBlock} onClick={() => navigate('/admin/users')}>
                        <div className={styles.buttonContent}>
                            <span>Users</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path
                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.buttonBlock} onClick={() => navigate('/admin/statistics')}>
                        <div className={styles.buttonContent}>
                            <span>Statistics</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path
                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.buttonBlock} onClick={() => navigate('/admin/tickets')}>
                        <div className={styles.buttonContent}>
                            <span>Tickets</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-stickies-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5z"/>
                                <path
                                    d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V10.5z"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.buttonBlock} onClick={() => navigate('/admin/prices')}>
                        <div className={styles.buttonContent}>
                            <span>Prices</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-stickies-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5z"/>
                                <path
                                    d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V10.5z"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.buttonBlock} onClick={() => navigate('/admin/news')}>
                        <div className={styles.buttonContent}>
                            <span>News</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-magic" viewBox="0 0 16 16">
                                <path
                                    d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/>
                            </svg>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Admin;
