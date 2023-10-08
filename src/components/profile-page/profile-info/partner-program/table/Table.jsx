import Pagination from '../pagination/Pagination'
import styles from './Table.module.scss'
const Table = () => {
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>Balance history</p>
			</div>
			<div className={styles.tableHead}>
				<div className={styles.one}>
					<span>#</span>
				</div>
				<div className={styles.two}>
					<span>Link</span>
				</div>
				<div className={styles.three}>
					<span>Date</span>
				</div>
				<div className={styles.four}>
					<span>UserName</span>
				</div>
				<div className={styles.five}>
					<span>Add funds</span>
				</div>
				<div className={styles.six}>
					<span>Status</span>
				</div>
				<div className={styles.seven}>
					<span>Earned </span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<div className={styles.tableRow}>
				<div className={styles.one}>
					<span>1</span>
				</div>
				<div className={styles.two}>
					<span>krakenlookup-service.com/$_referal141515</span>
				</div>
				<div className={styles.three}>
					<span>17:18 20/12/2024</span>
				</div>
				<div className={styles.four}>
					<span>UserName9844161</span>
				</div>
				<div className={styles.five}>
					<span>Yes </span>
				</div>
				<div className={styles.six}>
					<span>Active</span>
				</div>
				<div className={styles.seven}>
					<span>$789</span>
				</div>
			</div>
			<Pagination />
		</div>
	)
}

export default Table
