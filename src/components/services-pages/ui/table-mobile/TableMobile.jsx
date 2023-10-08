import ButtonClassicTwo from '../../../ui/button/button-classic-two/ButtonClassicTwo'
import styles from './TableMobile.module.scss'
const TableMobile = () => {

	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>Search history</p>
			</div>
			<div className={styles.table}>
				<div className={styles.tableInfo}>
					<div className={styles.id}>
						<p>1</p>
					</div>
					<div className={styles.colum}>
						<div className={styles.date}>
							<p>Date</p>
						</div>
						<div className={styles.dateValue}>
							<p>17:18 20/12/2024</p>
						</div>
					</div>
					<div className={styles.colum}>
						<div className={styles.status}>
							<p>Status</p>
						</div>
						<div className={styles.statusConfirm}>
							<p>Confirm</p>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<ButtonClassicTwo>Request</ButtonClassicTwo>
					<ButtonClassicTwo>Response</ButtonClassicTwo>
				</div>
			</div>


			<div className={styles.table}>
				<div className={styles.tableInfo}>
					<div className={styles.id}>
						<p>1</p>
					</div>
					<div className={styles.colum}>
						<div className={styles.date}>
							<p>Date</p>
						</div>
						<div className={styles.dateValue}>
							<p>17:18 20/12/2024</p>
						</div>
					</div>
					<div className={styles.colum}>
						<div className={styles.status}>
							<p>Status</p>
						</div>
						<div className={styles.statusConfirm}>
							<p>Confirm</p>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<ButtonClassicTwo>Request</ButtonClassicTwo>
					<ButtonClassicTwo>Response</ButtonClassicTwo>
				</div>
			</div>


			<div className={styles.table}>
				<div className={styles.tableInfo}>
					<div className={styles.id}>
						<p>1</p>
					</div>
					<div className={styles.colum}>
						<div className={styles.date}>
							<p>Date</p>
						</div>
						<div className={styles.dateValue}>
							<p>17:18 20/12/2024</p>
						</div>
					</div>
					<div className={styles.colum}>
						<div className={styles.status}>
							<p>Status</p>
						</div>
						<div className={styles.statusConfirm}>
							<p>Confirm</p>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<ButtonClassicTwo>Request</ButtonClassicTwo>
					<ButtonClassicTwo>Response</ButtonClassicTwo>
				</div>
			</div>


			<div className={styles.table}>
				<div className={styles.tableInfo}>
					<div className={styles.id}>
						<p>1</p>
					</div>
					<div className={styles.colum}>
						<div className={styles.date}>
							<p>Date</p>
						</div>
						<div className={styles.dateValue}>
							<p>17:18 20/12/2024</p>
						</div>
					</div>
					<div className={styles.colum}>
						<div className={styles.status}>
							<p>Status</p>
						</div>
						<div className={styles.statusConfirm}>
							<p>Confirm</p>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<ButtonClassicTwo>Request</ButtonClassicTwo>
					<ButtonClassicTwo>Response</ButtonClassicTwo>
				</div>
			</div>
		</div>
	)
}

export default TableMobile
