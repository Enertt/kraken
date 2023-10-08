import { useEffect, useState } from 'react'
import styles from './DatePicker.module.scss'
import { useLocation } from 'react-router-dom'

const DatePicker = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenSetting, setIsOpenSetting] = useState(false)
	const [isOpenYear, setIsOpenYear] = useState(false)
	const [isOpenMonth, setIsOpenMonth] = useState(false)
	const [selectedYear, setSelectedYear] = useState(2000)
	const [selectedMonth, setSelectedMonth] = useState('February')
	const [selectedDay, setSelectedDay] = useState(null)
	const [daysInMonth, setDaysInMonth] = useState([])
	const [activeFormat, setActiveFormat] = useState(0)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

	const { pathname } = useLocation()

	useEffect(() => {
		updateDaysInMonth(selectedYear, selectedMonth)

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleToggle = () => {
		setIsOpen(!isOpen)
		setIsOpenSetting(false)
	}

	const handleToggleSetting = () => {
		setIsOpenSetting(!isOpenSetting)
		setIsOpen(false)
	}

	const handleToggleYear = event => {
		const year = parseInt(event.target.textContent)
		setSelectedYear(year)
		setIsOpenYear(prevIsOpenYear => !prevIsOpenYear)
		setIsOpenMonth(false)
		updateDaysInMonth(year, selectedMonth)
	}

	const handleToggleMonth = event => {
		const month = event.target.textContent
		setSelectedMonth(month)
		setIsOpenMonth(prevIsOpenMonth => !prevIsOpenMonth)
		setIsOpenYear(false)
		updateDaysInMonth(selectedYear, month)
	}

	const handleToggleDay = day => {
		setSelectedDay(day)
	}

	const updateDaysInMonth = (year, month) => {
		if (year && month) {
			const daysInSelectedMonth = new Date(
				year,
				new Date(month + ' 1, 2000').getMonth() + 1,
				0
			).getDate()
			const daysArray = Array.from(
				{ length: daysInSelectedMonth },
				(_, index) => index + 1
			)
			setDaysInMonth(daysArray)
		}
	}

	const yearOptions = []
	for (let year = 1900; year <= 2023; year++) {
		yearOptions.push(
			<div
				key={year}
				className={styles.yearOption}
				onClick={() => handleToggleYear(year)}
			>
				<p>{year}</p>
			</div>
		)
	}
	yearOptions.sort((a, b) => b.key - a.key)

	const monthOptions = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	].map(month => (
		<div
			key={month}
			className={styles.monthOption}
			onClick={() => handleToggleMonth(month)}
		>
			<p>{month}</p>
		</div>
	))

	const getNumericMonth = month => {
		const monthIndex = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		].indexOf(month)
		return (monthIndex + 1).toString().padStart(2, '0')
	}

	const dayOptions = daysInMonth.map(day => (
		<div
			key={day}
			className={styles.dayOption}
			onClick={() => handleToggleDay(day)}
		>
			<p>{day}</p>
		</div>
	))

	const handleMethodClick = index => {
		setActiveFormat(index)
	}

	return (
		<div className={styles.datePickerContainer}>
			<div className={styles.label}>
				<p>
					DOB <span>*</span>
				</p>
			</div>
			<div className={isOpenSetting ? styles.dropdownActive : styles.dropdown}>
				<div className={styles.dropdownToggle}>
					<div className={styles.value}>
						<p>
							{selectedMonth && selectedDay && selectedYear
								? activeFormat === 0
									? `${getNumericMonth(
											selectedMonth
									  )}/${selectedDay}/${selectedYear}`
									: activeFormat === 1
									? `${getNumericMonth(selectedMonth)}/${selectedYear}`
									: activeFormat === 2
									? `${selectedYear}`
									: selectedYear
								: activeFormat === 0
								? 'mm/dd/yyyy'
								: activeFormat === 1
								? 'mm/yyyy'
								: 'yyyy'}
						</p>
					</div>

					<div className={styles.buttons}>
						{isMobile
							? ''
							: pathname === '/ssn-dob-lookup' && (
									<div
										className={
											isOpenSetting ? styles.settingActive : styles.setting
										}
										onClick={handleToggleSetting}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='17'
											height='17'
											viewBox='0 0 17 17'
											fill='none'
										>
											<path
												d='M15.5178 6.29001C15.2078 6.24498 14.912 6.1306 14.6523 5.95539C14.3927 5.78017 14.1759 5.54864 14.0181 5.27803C13.8603 5.00741 13.7656 4.7047 13.7411 4.39241C13.7165 4.08013 13.7627 3.76633 13.8763 3.47438C13.9484 3.28352 13.9591 3.07486 13.9067 2.87765C13.8543 2.68043 13.7415 2.50457 13.5841 2.3747C12.8892 1.79121 12.0983 1.33283 11.2466 1.02001C11.0526 0.947963 10.8409 0.938961 10.6415 0.994286C10.4422 1.04961 10.2653 1.16644 10.1363 1.32813C9.94197 1.57657 9.69366 1.77751 9.41016 1.9157C9.12665 2.0539 8.8154 2.12571 8.50001 2.12571C8.18462 2.12571 7.87337 2.0539 7.58987 1.9157C7.30636 1.77751 7.05805 1.57657 6.86376 1.32813C6.73468 1.16644 6.55786 1.04961 6.3585 0.994286C6.15913 0.938961 5.9474 0.947963 5.75345 1.02001C4.96702 1.30882 4.23173 1.7213 3.57532 2.24188C3.40986 2.37287 3.29068 2.55339 3.23524 2.75701C3.17979 2.96063 3.19099 3.17665 3.2672 3.37345C3.38979 3.67312 3.44044 3.99735 3.41508 4.32013C3.38973 4.64292 3.28908 4.95526 3.12121 5.23212C2.95334 5.50898 2.72292 5.74264 2.44843 5.91436C2.17395 6.08609 1.86303 6.19109 1.54064 6.22095C1.33133 6.24333 1.13474 6.33232 0.979802 6.47482C0.824868 6.61732 0.719781 6.8058 0.680011 7.01251C0.581091 7.50216 0.531261 8.00046 0.531261 8.50001C0.530534 8.91822 0.564295 9.33578 0.632199 9.74845C0.665994 9.96178 0.769127 10.158 0.925651 10.3069C1.08217 10.4557 1.28337 10.5489 1.49814 10.5719C1.82761 10.6028 2.14489 10.7122 2.42342 10.8909C2.70194 11.0696 2.93361 11.3124 3.09902 11.5991C3.26444 11.8857 3.35879 12.2077 3.37419 12.5383C3.38958 12.8689 3.32557 13.1983 3.18751 13.4991C3.09716 13.6947 3.07475 13.9149 3.12384 14.1247C3.17292 14.3345 3.29069 14.522 3.45845 14.6572C4.14913 15.2301 4.93244 15.681 5.7747 15.9906C5.8824 16.0279 5.99541 16.0477 6.10939 16.0491C6.26566 16.0487 6.41958 16.0109 6.55824 15.9388C6.69689 15.8667 6.81623 15.7624 6.90626 15.6347C7.09561 15.3588 7.34942 15.1333 7.64568 14.9778C7.94193 14.8223 8.27166 14.7414 8.60626 14.7422C8.93046 14.7426 9.25008 14.8187 9.53968 14.9644C9.82928 15.1101 10.0809 15.3215 10.2744 15.5816C10.4031 15.7546 10.5855 15.8802 10.793 15.9388C11.0006 15.9974 11.2217 15.9858 11.4219 15.9056C12.192 15.5957 12.909 15.1673 13.5469 14.6359C13.7071 14.5035 13.8212 14.3236 13.8728 14.1222C13.9243 13.9208 13.9107 13.7082 13.8338 13.515C13.7088 13.2192 13.6543 12.8984 13.6746 12.5779C13.6949 12.2574 13.7894 11.9461 13.9507 11.6684C14.1119 11.3907 14.3355 11.1543 14.6038 10.9778C14.8721 10.8014 15.1777 10.6897 15.4966 10.6516C15.7033 10.623 15.8956 10.5293 16.0456 10.3841C16.1955 10.2389 16.2954 10.0498 16.3306 9.84407C16.416 9.40096 16.4622 8.95121 16.4688 8.50001C16.4689 8.02409 16.4244 7.5492 16.3359 7.08157C16.3001 6.88039 16.2017 6.69562 16.0549 6.55352C15.908 6.41143 15.7201 6.31922 15.5178 6.29001ZM11.1563 8.50001C11.1563 9.02537 11.0005 9.53892 10.7086 9.97574C10.4167 10.4126 10.0019 10.753 9.51651 10.9541C9.03115 11.1551 8.49707 11.2077 7.9818 11.1052C7.46654 11.0027 6.99324 10.7497 6.62176 10.3783C6.25028 10.0068 5.99729 9.53348 5.8948 9.01822C5.79231 8.50296 5.84491 7.96887 6.04596 7.48351C6.247 6.99814 6.58746 6.58329 7.02428 6.29142C7.4611 5.99955 7.97466 5.84376 8.50001 5.84376C9.20449 5.84376 9.88012 6.12361 10.3783 6.62176C10.8764 7.1199 11.1563 7.79553 11.1563 8.50001Z'
												fill={isOpenSetting ? 'white' : '#7781A4'}
											/>
										</svg>
									</div>
							  )}

						{isOpenSetting && (
							<div className={styles.dropdownSetting}>
								{activeFormat === 0 ? (
									<div
										className={styles.arrow}
										onClick={() => handleMethodClick(0)}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M5 12L10 17L20 7'
												stroke='white'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								) : (
									<div
										className={styles.emptyArrow}
										onClick={() => handleMethodClick(0)}
									/>
								)}
								<div className={styles.settingOption}>
									<p>mm/dd/yyyy</p>
								</div>
								{activeFormat === 1 ? (
									<div
										className={styles.arrow}
										onClick={() => handleMethodClick(1)}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M5 12L10 17L20 7'
												stroke='white'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								) : (
									<div
										className={styles.emptyArrow}
										onClick={() => handleMethodClick(1)}
									/>
								)}
								<div className={styles.settingOption}>
									<p>mm/yyyy</p>
								</div>
								{activeFormat === 2 ? (
									<div
										className={styles.arrow}
										onClick={() => handleMethodClick(2)}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M5 12L10 17L20 7'
												stroke='white'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								) : (
									<div
										className={styles.emptyArrow}
										onClick={() => handleMethodClick(2)}
									/>
								)}
								<div className={styles.settingOption}>
									<p>yyyy</p>
								</div>
							</div>
						)}

						<div
							className={isOpen ? styles.svgActive : styles.svg}
							onClick={handleToggle}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M19 5H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V5H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V9H22V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5Z'
									fill={isOpen ? 'white' : '#7781A4'}
								/>
								<path
									d='M2 19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V11H2V19Z'
									fill={isOpen ? 'white' : '#7781A4'}
								/>
							</svg>
						</div>
					</div>
				</div>
				{isOpen && (
					<div className={styles.dropdownOptions}>
						<div className={styles.subPikers}>
							<div
								className={
									isOpenYear ? styles.yearPickerOpen : styles.yearPicker
								}
								onClick={handleToggleYear}
							>
								<div className={styles.selectedYear}>
									<p>{selectedYear}</p>
								</div>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='14'
										height='8'
										viewBox='0 0 14 8'
										fill='none'
									>
										<path
											d='M1 1L7 7L13 1'
											stroke='#7781A4'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
								{isOpenYear && (
									<div className={styles.backgroundYearOption}>
										<div className={styles.yearOptions}>{yearOptions}</div>
									</div>
								)}
							</div>

							<div
								className={
									isOpenMonth ? styles.monthPickerOpen : styles.monthPicker
								}
								onClick={handleToggleMonth}
							>
								<div className={styles.selectedMonth}>
									<p>{selectedMonth}</p>
								</div>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='14'
										height='8'
										viewBox='0 0 14 8'
										fill='none'
									>
										<path
											d='M1 1L7 7L13 1'
											stroke='#7781A4'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
								{isOpenMonth && (
									<div className={styles.backgroundMonthOption}>
										<div className={styles.monthOptions}>{monthOptions}</div>
									</div>
								)}
							</div>
						</div>

						<div className={styles.dayOptions}>{dayOptions}</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default DatePicker
