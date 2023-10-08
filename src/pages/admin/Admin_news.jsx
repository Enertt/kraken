import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    post_admin_add_news,
    post_admin_del_news,
    post_admin_join,
    post_admin_read_news
} from "../../app/api/admin.api.js";
import Loader from "../../components/ui/loader/Loader.jsx";
import styles from './admin_news.module.css';
import AdminHomeBtn from "./AdminHomeBtn.jsx";
import styles2 from './admin_users.module.css';

const Colums = () => {
    return <>
        <div className={styles2.columnNames}>
            <div className={styles2.three}>
                <span>ID</span>
            </div>

            <div className={styles2.two}>
                <span>Header</span>
            </div>

            <div className={styles2.one}>
                <span>Message</span>
            </div>

            <div className={styles2.three}>
                <span>Sender</span>
            </div>

            <div className={styles2.banStatus}>
                <span>data</span>
            </div>

            <div className={styles2.five}>
                <span>Delete</span>
            </div>
        </div>
    </>
}

const showRows = (list, deleteNews) => {
    if (list.length <= 0) return <div style={{color: "white", margin: 32}}>Users List is Empty</div>
    return list.map((e) => {
        return (
            <div key={e.id_news} className={styles2.rowWrapper}>
                <div className={styles2.three}>
                    <span>{`${e.id_news}`}</span>
                </div>

                <div className={styles2.three}>
                    <span>{`${e.header}`}</span>
                </div>

                <div className={styles2.one}>
                    <span>{`${e.message}`}</span>
                </div>

                <div className={styles2.two}>
                    <span>{`${e.sender}`}</span>
                </div>

                <div className={styles2.three}>
                    <span>{`${e.data}`}</span>
                </div>

                <div className={styles2.five}>
                    <button onClick={() => deleteNews(e.id_news)}>Delete</button>
                </div>
            </div>
        )
    })
}

const AdminNews = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        post_admin_join(localStorage.getItem('admin_token')).then(r => {
            console.log(r)
            if (r.status !== 200) {
                navigate('/admin/login')
            } else {
                getListNews()
            }
        }).catch(e => {
            console.log(e)
            navigate('/admin/login')
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const [list, setList] = useState([]);
    const [news_loading, setNewsLoading] = useState(true);
    const [create_error, setCreateError] = useState(false);
    const [create_loading, setCreateLoading] = useState(false);

    const [id_news, setIdNews] = useState();
    const [username, setUsername] = useState('');
    const [news_header, setNewsHeader] = useState('');
    const [news, setNews] = useState('');
    const [data, setData] = useState('');

    function getListNews() {
        setNewsLoading(true)

        post_admin_read_news().then(r => {
            console.log(r)
            if (r.status === 200) {
                setList(r.data)
            }
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setNewsLoading(false)
        })
    }

    function createNews() {
        setCreateError(false)
        setCreateLoading(true)
        post_admin_add_news(id_news, username, news_header, news, data).then(r => {
            console.log(r)
            if (r.status === 200) {
                setIdNews('')
                setUsername('')
                setNewsHeader('')
                setNews('')
                setData('')

                getListNews()
            }
        }).catch(e => {
            console.log(e)
            setCreateError(true)
        }).finally(() => {
            setCreateLoading(false)
        })
    }

    function deleteNews(id) {
        post_admin_del_news(id).then(r => {
            console.log(r)
            if (r.status === 200) {
                getListNews()
            }
        }).catch(e => {
            console.log(e)
        })
    }

    if (loading) return <Loader/>

    return (
        <div className={styles.root}>
            <AdminHomeBtn/>
            <h1>Admin news</h1>

            <div className={styles2.searchingWrapper}>
                <div className={styles2.searchingContent}>
                    {create_error && <div style={{color: 'red'}}>
                        Error create
                    </div>}
                    <div>
                        <input value={id_news}
                               onChange={(e) => setIdNews(e.target.value)}
                               type="text"
                               placeholder={'Enter id news'}
                        />
                    </div>
                    <div>
                        <input value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               type="text"
                               placeholder={'Enter username'}
                        />
                    </div>
                    <div>
                        <input value={news_header}
                               onChange={(e) => setNewsHeader(e.target.value)}
                               type="text"
                               placeholder={'Enter news header'}
                        />
                    </div>
                    <div>
                        <input value={news}
                               onChange={(e) => setNews(e.target.value)}
                               type="text"
                               placeholder={'Enter news body'}
                        />
                    </div>
                    <div>
                        <input value={data}
                               onChange={(e) => setData(e.target.value)}
                               type="text"
                               placeholder={'Enter data'}
                        />
                    </div>
                    <div>
                        <button onClick={() => createNews()}>
                            {create_loading ? 'Loading' : 'Create'}
                        </button>
                    </div>
                </div>
            </div>

            <Colums/>

            {news_loading ?
                <div style={{color: "white", margin: 32}}>Loading News List </div> : showRows(list, deleteNews)}
        </div>
    );
};

export default AdminNews;
