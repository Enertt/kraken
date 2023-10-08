import styles from './WithdrawalRequest.module.scss'
import ModalSection from './modal-section/ModalSection'
const WithdrawalRequest = ({ clickHandler }) => {
	return (
		<div className={styles.mask}>
			<div className={styles.block}>
				<div className={styles.cross} onClick={clickHandler}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='13'
						height='13'
						viewBox='0 0 13 13'
						fill='none'
					>
						<path
							d='M9.15466 0.659757C10.0343 -0.219919 11.4606 -0.219918 12.3402 0.659757C13.2199 1.53943 13.2199 2.96567 12.3402 3.84534L3.84534 12.3402C2.96567 13.2199 1.53943 13.2199 0.659757 12.3402C-0.219919 11.4606 -0.219919 10.0343 0.659757 9.15466L9.15466 0.659757Z'
							fill='#343B54'
						/>
						<path
							d='M12.3402 9.15466C13.2199 10.0343 13.2199 11.4606 12.3402 12.3402C11.4606 13.2199 10.0343 13.2199 9.15466 12.3402L0.659757 3.84534C-0.219919 2.96567 -0.219918 1.53943 0.659757 0.659757C1.53943 -0.219919 2.96567 -0.219919 3.84534 0.659757L12.3402 9.15466Z'
							fill='#343B54'
						/>
					</svg>
				</div>
				<div className={styles.title}>
					<p>Request Withdrawal</p>
				</div>
				<div className={styles.textArea}>
					<div className={styles.textTitle}>
						<p>Rules Request Withdrawal</p>
					</div>
					<div className={styles.text}>
						<p>
							Lorem ipsum dolor sit amet consectetur. Nam sit eget aliquet
							aliquam ipsum. Ullamcorper ornare mus commodo lobortis diam
							feugiat. Rhoncus nec auctor malesuada tortor nibh arcu sapien
							ultricies. In facilisis senectus magna nullam dignissim venenatis.
							Mauris tellus amet adipiscing parturient.
						</p>
					</div>
					<ModalSection clickHandler={clickHandler} />
				</div>
			</div>
		</div>
	)
}

export default WithdrawalRequest
