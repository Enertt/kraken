import styles from './PartnerProgram.module.scss'
import krakenCoin from '../assets/coin-icon.svg'
import { useRef } from 'react'
import Table from './table/Table'

const PartnerProgram = () => {
	const linkHrefRef = useRef(null)

	const handleCopyToClipboard = () => {
		if (linkHrefRef.current) {
			const textToCopy = linkHrefRef.current.textContent
			const textarea = document.createElement('textarea')
			textarea.value = textToCopy
			document.body.appendChild(textarea)
			textarea.select()
			document.execCommand('copy')
			document.body.removeChild(textarea)
		}
	}
	return (
		<>
			<div className={styles.block}>
				<div className={styles.header}>
					<div className={styles.img}>
						<img src={krakenCoin} alt='Coin' draggable={false} />
					</div>
					<div className={styles.section}>
						<div className={styles.title}>
							<p>Generate an invitation code</p>
						</div>
						<div className={styles.sectionTwo}>
							<div className={styles.linkBlock}>
								<div>
									<div className={styles.linkTitle}>
										<p>Link:</p>
									</div>
									<div className={styles.linkHref} ref={linkHrefRef}>
										<p>https://krakenlookup-service.com/$_referal141515</p>
									</div>
								</div>
								<div className={styles.svg} onClick={handleCopyToClipboard}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='19'
										height='19'
										viewBox='0 0 19 19'
										fill='none'
									>
										<path
											d='M8.25 16.0417H13.475C13.2039 16.7192 12.7357 17.2997 12.1311 17.7083C11.5264 18.1168 10.8131 18.3346 10.0833 18.3333H3.66665C3.1851 18.3334 2.70825 18.2387 2.26333 18.0545C1.81841 17.8703 1.41414 17.6002 1.07364 17.2597C0.733129 16.9192 0.46305 16.5149 0.278832 16.07C0.094613 15.6251 -0.000135348 15.1482 1.45115e-07 14.6667V7.3333C0.00108495 6.44041 0.327379 5.57848 0.917863 4.9087C1.50835 4.23893 2.32258 3.80718 3.2083 3.6942V11C3.2083 13.7775 5.47246 16.0417 8.25 16.0417ZM16.0417 3.8958H17.985C17.9286 3.81319 17.8641 3.73642 17.7925 3.66665L14.6667 0.540676C14.5991 0.469311 14.522 0.407703 14.4375 0.357629V2.29165C14.4395 2.71648 14.6092 3.12333 14.9096 3.42372C15.21 3.72412 15.6168 3.89378 16.0417 3.8958ZM16.0417 5.2708C15.252 5.26928 14.4951 4.95492 13.9368 4.39655C13.3784 3.83818 13.064 3.08131 13.0625 2.29165V1.4511e-07H8.25C7.76845 -0.000135346 7.29159 0.0946127 6.84667 0.278831C6.40174 0.463049 5.99748 0.733127 5.65697 1.07363C5.31646 1.41414 5.04637 1.8184 4.86215 2.26332C4.67793 2.70824 4.58317 3.1851 4.5833 3.66665V11C4.58318 11.4816 4.67794 11.9584 4.86216 12.4033C5.04639 12.8482 5.31647 13.2525 5.65698 13.593C5.99749 13.9335 6.40175 14.2036 6.84667 14.3878C7.29159 14.572 7.76845 14.6668 8.25 14.6667H14.6667C15.1482 14.6668 15.6251 14.572 16.07 14.3878C16.5149 14.2036 16.9192 13.9335 17.2597 13.593C17.6002 13.2525 17.8702 12.8482 18.0545 12.4033C18.2387 11.9584 18.3334 11.4815 18.3333 11V5.2708H16.0417Z'
											fill='#7781A4'
										/>
									</svg>
								</div>
							</div>
							<div className={styles.info}>
								<div className={styles.button}>
									<button>Generate</button>
								</div>
								<div className={styles.infoText}>
									<p>
										Followed the link: <span>7563</span>
									</p>
								</div>
								<div className={styles.infoText}>
									<p>
										registered using the link: <span>26</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Table />
		</>
	)
}

export default PartnerProgram
