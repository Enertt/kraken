import { useState } from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ name, required, options }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(options[0])
	const [searchValue, setSearchValue] = useState('')

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	const handleSearchChange = e => {
		setSearchValue(e.target.value)
	}

	const filteredOptions = options.filter(option =>
		option.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<div className={styles.block}>
			<p className={styles.name}>
				{name} <span>{required}</span>
			</p>
			<div className={isOpen ? styles.openDropdown : styles.dropdown}>
				<div className={styles.toggleButton} onClick={handleToggle}>
					<div className={styles.text}>{selectedOption}</div>
					<div>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='8'
								viewBox='0 0 14 8'
								fill='none'
								style={{ transform: 'rotate(180deg)' }}
							>
								<path
									d='M1 1L7 7L13 1'
									stroke={isOpen ? 'white' : '#7781A4'}
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						) : (
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
						)}
					</div>
				</div>

				{isOpen && (
					<div className={styles.optionsList}>
						<div className={styles.searchBox}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z'
									stroke='#7781A4'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<input
								type='text'
								placeholder='Search State'
								value={searchValue}
								onChange={handleSearchChange}
							/>
						</div>

						<div className={styles.options}>
							{filteredOptions.map(option => (
								<div
									key={option}
									className={styles.option}
									onClick={() => handleOptionClick(option)}
								>
									<p>{option}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Dropdown
