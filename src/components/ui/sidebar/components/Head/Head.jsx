import Svg from '../../assets/icon.svg'
import styles from './Head.module.scss'
const Head = () => {
	return (
		<div className={styles.head}>
			<div>
				<img src={Svg} />
			</div>
			<div>
				<h1>KRAKEN</h1>
				<p>lookup service</p>
			</div>
		</div>
	)
}

export default Head
