import Navbar from '../../navbar/Navbar';
import styles from './Sidebar.module.scss';
import Head from './components/Head/Head';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Head/>
            <Navbar/>
        </div>
    )
}

export default SideBar
