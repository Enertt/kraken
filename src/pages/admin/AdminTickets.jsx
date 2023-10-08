import Page from "../../components/admin-ticket-page/Page.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./admin.module.css";
import Loader from "../../components/ui/loader/Loader.jsx";
import AdminHomeBtn from "./AdminHomeBtn.jsx";
import {post_admin_join} from "../../app/api/admin.api.js";

const AdminTickets = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        post_admin_join().then(r => {
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
        <div className={styles.root} style={{
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <AdminHomeBtn/>

            <h1>Admin Page</h1>
            <Page/>
        </div>
    );
};

export default AdminTickets;
