import { useState } from 'react'
import styles from './Notification.module.scss'
import { useLocation } from 'react-router-dom'
const Notification = ({ children, title }) => {
	const [isCrossVisible, setCrossVisible] = useState(true)
	const location = useLocation()
	const isProfilePath = location.pathname === '/profile'

	const handleCrossClick = () => {
		setCrossVisible(false)
	}
	return (
		<>
			{isCrossVisible && (
				<div className={isProfilePath ? styles.blockProfile : styles.block}>
					<div className={styles.section}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className={styles.ball}
							width='65'
							height='65'
							viewBox='0 0 65 65'
							fill='none'
						>
							<g clipPath='url(#clip0_57_9333)'>
								<path
									d='M47.3949 0C37.6884 0 29.791 7.89738 29.791 17.6043C29.791 27.3108 37.6884 35.2082 47.3949 35.2082C57.1018 35.2082 64.9992 27.3108 64.9992 17.6043C64.9992 7.89738 57.1018 0 47.3949 0ZM50.1035 23.6981C50.1035 24.8193 49.1935 25.7293 48.0723 25.7293C46.951 25.7293 46.041 24.8193 46.041 23.6981V14.8957H44.6867C43.5654 14.8957 42.6554 13.9857 42.6554 12.8644C42.6554 11.7432 43.5654 10.8332 44.6867 10.8332H48.0723C49.1935 10.8332 50.1035 11.7432 50.1035 12.8644V23.6981Z'
									fill='#A140FD'
								/>
								<path
									d='M37.9168 54.1668C37.9168 60.15 33.0663 65 27.0832 65C21.1 65 16.25 60.15 16.25 54.1668C16.25 48.1836 21.1 43.3331 27.0832 43.3331C33.0663 43.3331 37.9168 48.1836 37.9168 54.1668Z'
									fill='#FFA000'
								/>
								<path
									d='M48.2625 40.5819C47.9729 40.5923 47.6883 40.625 47.3957 40.625C34.7018 40.625 24.375 30.2982 24.375 17.6044C24.375 13.1437 25.6723 8.98891 27.8771 5.45753C27.6113 5.44662 27.3515 5.41687 27.0832 5.41687C16.6294 5.41687 8.125 13.9207 8.125 24.375V31.9258C8.125 37.2856 5.77686 42.3449 1.65733 45.8276C0.604019 46.7267 0 48.0404 0 49.427C0 52.0409 2.12597 54.1669 4.73942 54.1669H49.4269C52.0409 54.1669 54.1668 52.0409 54.1668 49.427C54.1668 48.0404 53.5628 46.7267 52.4822 45.8033C50.7351 44.3245 49.3267 42.5427 48.2625 40.5819Z'
									fill='#FFC107'
								/>
							</g>
							<defs>
								<clipPath id='clip0_57_9333'>
									<rect width='65' height='65' fill='white' />
								</clipPath>
							</defs>
						</svg>
						<div className={styles.info}>
							<div className={styles.title}>
								<p>{title}</p>
							</div>
							<div className={styles.text}>
								<p>{children}</p>
							</div>
						</div>
					</div>
					<div className={styles.cross} onClick={handleCrossClick}>
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
				</div>
			)}
		</>
	)
}

export default Notification
