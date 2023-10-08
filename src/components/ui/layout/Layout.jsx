import styles from './Layout.module.scss'
import './effect.scss'
import SideBar from '../sidebar/SideBar'
import {useLocation} from 'react-router-dom'
import {Header} from "../header/Header.jsx";

const Layout = ({children, isAuth}) => {

    const location = useLocation()

    if (location.pathname.split('/')[1] === 'admin') return <>{children}</>

    if (isAuth) return (
        <>
            <div className={styles.layer}>
                <SideBar/>
                <Header/>
            </div>

            <div className={styles.children}>
                {children}
            </div>
        </>
    )

    return <>{children}</>
}

export default Layout
