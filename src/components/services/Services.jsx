import styles from './Services.module.scss'
import Card from './card/Card'
import {nav_dropdown_items} from "../navbar/selector/Selector.jsx";

const Services = () => {
    return (
        <div>
            <div className={styles.title}>
                <p>Service</p>
            </div>
            <div className={styles.cardList}>
                {nav_dropdown_items.map(e => <Card link={e.link} key={e.id} title={e.name} img='Tentacles-groupe.svg'/>)}
            </div>
        </div>
    )
}

export default Services
