import { useLocation } from 'react-router-dom'
import styles from './Example.module.scss'
const Example = () => {
	const { pathname } = useLocation()
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>EXAMPLE:</p>
			</div>
			{pathname === '/phone-lookup' ? (
				<div className={styles.stroke}>
					<div className={styles.exampleText}>
						<p>+33330455605</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>+33330455605</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>+33330455605</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>+33330455605</p>
					</div>
					<div className={styles.exampleText}>
						<p>+33330455605</p>
					</div>
				</div>
			) : (
				<div className={styles.stroke}>
					<div className={styles.exampleText}>
						<p>Bob</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>Martin</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>12/17/2000</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>75445448</p>
					</div>
					<div className={styles.exampleText}>
						<p>Alabama</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>NameCity</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>456123</p>
					</div>
					<p className={styles.divide}>|</p>
					<div className={styles.exampleText}>
						<p>NP 20 st.Name</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Example
