import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {post_admin_join, post_ban_user, post_current_user, post_user_list} from "../../app/api/admin.api.js";

export const useAdmin = () => {

    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [user_loading, setUserLoading] = useState(false);
    const [user_error, setUserError] = useState(false);
    const [auth_loading, setAuthLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [num, setNum] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const num_v = Number(location.search.split('=')[1]);
        if (!isNaN(num_v)) {
            setNum(num_v)
        } else {
            setNum(0)
        }
    }, [location])

    useEffect(() => {
        getUserList()
    }, [num])

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
            setAuthLoading(false)
        })
    }, [])

    function getUser() {
        setUserLoading(true)
        setUser([])
        setUserError(false)
        post_current_user(username).then((r) => {
            console.log(r)
            if (r.status === 200) {
                setUserError(false)
                setUser(r.data)
            }
        }).catch((e) => {
            console.log(e)
            setUserError(true)
        }).finally(() => {
            setUserLoading(false)
        })
    }

    function getUserList() {
        setLoading(true)
        post_user_list(num).then(r => {
            if (r.status === 200) {
                setUsers(r.data)
            } else {
                console.log(r)
                setUsers([])
            }
        }).catch(e => {
            console.log(e)
            setUsers([])
        }).finally(() => {
            setLoading(false)
        })
    }

    function BanUser(username, status, isUpdateList) {
        post_ban_user(username, status).then((r) => {
            console.log(r)
        }).catch((e) => {
            console.log(e)

        }).finally(() => {
            if (isUpdateList) {
                getUserList()
            } else {
                getUser()
            }
        })
    }


    return {
        user,
        setUser,

        users,
        setUsers,

        username,
        setUsername,

        user_loading,
        setUserLoading,

        user_error,
        setUserError,

        auth_loading,
        setAuthLoading,

        loading,
        setLoading,

        num,
        setNum,

        navigate,
        location,

        getUser,
        BanUser,
        getUserList,

    }
}
