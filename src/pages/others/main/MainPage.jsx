import styles from "./MainPage.module.scss";
import AdBanner from "../../../components/ad-banner/AdBanner.jsx";
import ServiceNews from "../../../components/service-news/ServiceNews.jsx";
import Services from "../../../components/services/Services.jsx";

const MainPage = () => {
    return (
        <div className={`fade_in ${styles.main}`}>
            <div className={styles.bannerList}>
                <AdBanner>Advertising banner</AdBanner>
                <AdBanner>Advertising banner</AdBanner>
                <AdBanner>Advertising banner</AdBanner>
            </div>
            <ServiceNews/>
            <Services/>
        </div>
    )
}
export default MainPage
