import Button from '../../ui/button/Button'
import styles from './Card.module.scss'
import {useNavigate} from "react-router-dom";

const Card = ({title, subtitle, img, link}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.block}>
            <div className={styles.ellipse}/>
            <img className={styles.img} src={img} alt='img'/>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
                <Button clickHandler={() => navigate(link)}>Open</Button>
            </div>
        </div>
    )
}

export default Card
