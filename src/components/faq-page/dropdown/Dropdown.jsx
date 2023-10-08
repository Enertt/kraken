import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { useSpring, animated } from 'react-spring'

const Dropdown = ({ children, title, background = null }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const rotateSpring = useSpring({
		transform: `rotate(${isExpanded ? 45 : 0}deg)`,
		config: {
			tension: 300,
			friction: 20
		}
	})

	const handleDropdownClick = () => {
		setIsExpanded(prevState => !prevState)
	}
	return (
		<div
			className={`${styles.block} ${
				background == true && styles.blockBackground
			}`}
		>
			<div className={styles.frontSection}>
				<div className={isExpanded ? styles.ellipseActive : styles.ellipse} />
				<div className={styles.blockTwo}>
					<div className={styles.stroke}>
						<div className={isExpanded ? styles.activeTitle : styles.title}>
							<p>{title}</p>
						</div>
						<div style={{ width: '56px', height: '56px' }}>
							<animated.svg
								className={styles.svg}
								xmlns='http://www.w3.org/2000/svg'
								width='56'
								height='56'
								viewBox='0 0 56 56'
								fill='none'
								style={{ ...rotateSpring }}
								onClick={handleDropdownClick}
							>
								<rect
									width='56'
									height='56'
									rx='28'
									fill={isExpanded ? '#58218C' : '#2D3348'}
								/>
								<path
									d='M34.2662 26.0068C35.5102 26.0068 36.5187 27.0153 36.5187 28.2594C36.5187 29.5034 35.5102 30.5119 34.2662 30.5119L22.2526 30.5119C21.0085 30.5119 20 29.5034 20 28.2594C20 27.0153 21.0085 26.0068 22.2526 26.0068L34.2662 26.0068Z'
									fill={isExpanded ? 'white' : '#343B54'}
								/>
								<path
									d='M30.5119 34.2662C30.5119 35.5102 29.5034 36.5187 28.2594 36.5187C27.0153 36.5187 26.0068 35.5102 26.0068 34.2662L26.0068 22.2525C26.0068 21.0085 27.0153 20 28.2594 20C29.5034 20 30.5119 21.0085 30.5119 22.2526V34.2662Z'
									fill={isExpanded ? 'white' : '#343B54'}
								/>
							</animated.svg>
						</div>
					</div>
				</div>
			</div>
			{isExpanded && <div className={styles.text}>{children}</div>}
		</div>
	)
}

export default Dropdown
