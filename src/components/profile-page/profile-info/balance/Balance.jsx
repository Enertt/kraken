import styles from './Balance.module.scss'
const Balance = ({ name, balance }) => {
	return (
		<div className={styles.block}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
			>
				<g clipPath='url(#clip0_57_144)'>
					<path d='M0 9.40527H8.12564V11.0986H0V9.40527Z' fill='#363B54' />
					<path
						d='M21.9688 2.65051C22.1317 2.99626 22.2233 3.38204 22.2233 3.78897V7.999H24.0003V5.42181C24.0003 4.12403 23.1451 3.02251 21.9688 2.65051Z'
						fill='#363B54'
					/>
					<path
						d='M22.2735 12.5049V18.089H21.5704C21.1163 18.089 20.747 18.4583 20.747 18.9123V19.6154H3.25298V18.9123C3.25298 18.4583 2.88361 18.089 2.42963 18.089H1.7265V12.5049H0V21.4841H24V12.5049H22.2735Z'
						fill='#363B54'
					/>
					<path
						d='M11.9994 14.3611C13.3603 14.3611 14.4675 13.2539 14.4675 11.893V9.40527H9.53125V11.893C9.53125 13.2539 10.6384 14.3611 11.9994 14.3611ZM11.2853 10.839H12.6916V12.2453H11.2853V10.839Z'
						fill='#363B54'
					/>
					<path
						d='M4.54577 18.2092H19.4544C19.6759 17.5445 20.2026 17.0178 20.8674 16.7963V12.5049H15.8257C15.5314 14.3514 13.9282 15.7673 12.0001 15.7673C10.0719 15.7673 8.46878 14.3514 8.17445 12.5049H3.13281V16.7963C3.79759 17.0178 4.32428 17.5445 4.54577 18.2092Z'
						fill='#363B54'
					/>
					<path
						d='M3.18359 3.78899V7.99903H20.8173V3.78899C20.8173 3.08699 20.2462 2.51587 19.5442 2.51587H4.45672C3.75472 2.51582 3.18359 3.08695 3.18359 3.78899Z'
						fill='#363B54'
					/>
					<path
						d='M0 7.99895H1.77689V3.78897C1.77689 3.38204 1.86848 2.99626 2.03147 2.65051C0.855188 3.02251 0 4.12403 0 5.42176L0 7.99895Z'
						fill='#363B54'
					/>
					<path
						d='M15.875 9.40527H24.0006V11.0986H15.875V9.40527Z'
						fill='#363B54'
					/>
				</g>
				<defs>
					<clipPath id='clip0_57_144'>
						<rect width='24' height='24' fill='white' />
					</clipPath>
				</defs>
			</svg>
			<div className={styles.info}>
				<div className={styles.name}>
					<p>{name}</p>
				</div>
				<div className={styles.balance}>
					<p>{balance}</p>
				</div>
			</div>
		</div>
	)
}

export default Balance