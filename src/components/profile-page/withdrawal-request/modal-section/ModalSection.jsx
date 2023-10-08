import { useState } from 'react'
import styles from './ModalSection.module.scss'
const ModalSection = ({ clickHandler }) => {
	const [sliderValue, setSliderValue] = useState(0)
	const [activeMethodIndex, setActiveMethodIndex] = useState(0)

	const handleSliderChange = event => {
		const newValue = parseInt(event.target.value, 10)
		setSliderValue(newValue)
	}

	const handleMethodClick = index => {
		setActiveMethodIndex(index)
	}

	const fillWidth = `${sliderValue}%`

	return (
		<div className={styles.block}>
			<div className={styles.header}>
				<p>Choose amount</p>
			</div>
			<div className={styles.section}>
				<div className={styles.range}>
					<div className={styles.rangeBlocks}>
						<div className={styles.rangeBlock}>
							<div className={styles.rangeTitle}>
								<p>Request:</p>
							</div>
							<div className={styles.rangeAmount}>
								<p>$105</p>
							</div>
						</div>
						<div className={styles.rangeBlock}>
							<div className={styles.rangeTitle}>
								<p>Request:</p>
							</div>
							<div className={styles.rangeAmount}>
								<p>${sliderValue}</p>
							</div>
						</div>
					</div>
					<div className={styles.inputBox}>
						<span className={styles.bar}>
							<span className={styles.fill} style={{ width: fillWidth }}></span>
						</span>
						<input
							type='range'
							min={0}
							max={105}
							className={styles.slider}
							value={sliderValue}
							onChange={handleSliderChange}
						/>
					</div>
				</div>
				<div className={styles.method}>
					<div className={styles.title}>
						<p>Choose method:</p>
					</div>
					<div className={styles.methodList}>
						<div
							className={
								activeMethodIndex === 0
									? styles.methodBlock
									: styles.methodBlockDisable
							}
							onClick={() => handleMethodClick(0)}
						>
							<div className={styles.methodTitle}>
								<p>BTC (Bitcoin)</p>
							</div>
							<div className={styles.exchange}>
								<p>1BTC=$42.123</p>
							</div>
							{activeMethodIndex === 0 ? (
								<div className={styles.active}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
									>
										<path
											d='M3.7207 8.00014L6.77626 11.0557L12.8874 4.94458'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							) : (
								<div className={styles.noneActive} />
							)}
						</div>
						<div
							className={
								activeMethodIndex === 1
									? styles.methodBlock
									: styles.methodBlockDisable
							}
							onClick={() => handleMethodClick(1)}
						>
							<div className={styles.methodTitle}>
								<p>BTC (Bitcoin)</p>
							</div>
							<div className={styles.exchange}>
								<p>1BTC=$42.123</p>
							</div>
							{activeMethodIndex === 1 ? (
								<div className={styles.active}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
									>
										<path
											d='M3.7207 8.00014L6.77626 11.0557L12.8874 4.94458'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							) : (
								<div className={styles.noneActive} />
							)}
						</div>
						<div
							className={
								activeMethodIndex === 2
									? styles.methodBlock
									: styles.methodBlockDisable
							}
							onClick={() => handleMethodClick(2)}
						>
							<div className={styles.methodTitle}>
								<p>BTC (Bitcoin)</p>
							</div>
							<div className={styles.exchange}>
								<p>1BTC=$42.123</p>
							</div>
							{activeMethodIndex === 2 ? (
								<div className={styles.active}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
									>
										<path
											d='M3.7207 8.00014L6.77626 11.0557L12.8874 4.94458'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							) : (
								<div className={styles.noneActive} />
							)}
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.createButton}>
						<button>Create a ticket</button>
					</div>
					<div className={styles.cancelButton}>
						<button onClick={clickHandler}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalSection
