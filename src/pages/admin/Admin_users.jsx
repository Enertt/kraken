import styles from './admin_users.module.css';
import {useState} from "react";
import {useAdmin} from "./useAdmin.js";
import Loader from "../../components/ui/loader/Loader.jsx";
import AdminHomeBtn from "./AdminHomeBtn.jsx";
import {post_update_balance} from "../../app/api/admin.api.js";

const BalanceInput = ({username, getUserList, getUser, isUpdateList}) => {

    const [summ, setSumm] = useState();

    function update_balance() {
        post_update_balance(username, summ).then((r) => {
            console.log(r)
        }).finally(() => {
            if (isUpdateList) {
                getUserList()
            } else {
                getUser()
            }
        })
    }

    return <>
        <div className={styles.four}>
            <input placeholder={'Enter balance'}
                   value={summ}
                   onChange={(e) => setSumm(e.target.value)}
            />
            <button onClick={() => update_balance()}>Top Up</button>
        </div>
    </>
}

const Colums = () => {
    return <>
        <div className={styles.columnNames}>
            <div className={styles.one}>
                <span>User Name</span>
            </div>

            <div className={styles.one}>
                <span>Email</span>
            </div>

            <div className={styles.two}>
                <span>Balance</span>
            </div>

            <div className={styles.three}>
                <span>Status</span>
            </div>

            <div className={styles.banStatus}>
                <span>Ban Status</span>
            </div>

            <div className={styles.banStatus}>

            </div>
            <div className={styles.banStatus}>

            </div>

            <div className={styles.four}>
                <span>Top Up</span>
            </div>

            <div className={styles.five}>
                <span>Ban/Unban</span>
            </div>
        </div>
    </>
}

const showRows = (list, BanUser, getUserList, getUser, isUpdateList) => {
    if (list.length <= 0) return <div style={{color: "white", margin: 32}}>Users List is Empty</div>
    return list.map((element) => {
        return (
            <div key={element.username} className={styles.rowWrapper}>
                <div className={styles.one}>
                    <span>{`${element.username}`}</span>
                </div>

                <div className={styles.two}>
                    <span>{`${element.mail}`}</span>
                </div>

                <div className={styles.two}>
                    <span>{`${element.balance}`}</span>
                </div>

                <div className={styles.three}>
                    <span>{`${element.status}`}</span>
                </div>

                <div className={styles.banStatus}>
                    <span>{`${element.ban_status}`}</span>
                </div>


                <BalanceInput isUpdateList={isUpdateList} getUser={getUser} getUserList={getUserList}
                              username={element.username}/>


                <div className={styles.five}>
                    <button onClick={() => BanUser(element.username, 'ban', isUpdateList)}>Ban</button>
                    <button onClick={() => BanUser(element.username, 'unban', isUpdateList)}>Unban</button>
                </div>
            </div>
        )
    })
}

const AdminUsers = () => {

    const {
        user_error,
        user,
        auth_loading,
        username,
        users,
        user_loading,
        num,
        loading,
        location,
        getUser,
        navigate,
        setUsername,
        BanUser, getUserList
    } = useAdmin();

    if (auth_loading) return <Loader/>

    return (
        <div className={styles.root}>
            <AdminHomeBtn/>
            <h1>Users</h1>

            <div className={styles.searchingWrapper}>
                <div className={styles.searchingContent}>
                    <div>
                        <input value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               type="text"
                               placeholder={'Enter username'}
                        />
                        <button disabled={username.trim() === ''} onClick={() => getUser()}>
                            {user_loading ? 'Loading' : 'Search'}
                        </button>
                    </div>


                    <div style={{width: '100%', textAlign: 'center'}}>
                        {user_loading && <div style={{color: 'white'}}>User Loading...</div>}
                        {user_error && <div style={{color: 'red'}}>User Not Found</div>}
                        {user.length > 0 && <>
                            {showRows(user, BanUser, getUserList, getUser, false)}
                        </>}
                    </div>

                </div>
            </div>

            <Colums/>

            {loading ? <div style={{color: "white", margin: 32}}>Loading User List </div>
                : showRows(users, BanUser, getUserList, getUser, true)
            }

            <div style={{display: 'flex', gap: '8px', alignItems: 'center', margin: 32}}>
                <button
                    disabled={num <= 0}
                    onClick={() => {
                        if (num > 0) {
                            navigate(`${location.pathname}?page=${num - 1}`)
                        }
                    }}
                    style={{fontSize: 32}}
                >
                    {'<'}
                </button>
                <button
                    disabled={users.length <= 0}
                    onClick={() => {
                        navigate(`${location.pathname}?page=${num + 1}`)
                    }}
                    style={{fontSize: 32}}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default AdminUsers;
