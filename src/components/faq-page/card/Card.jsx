import { useSpring, animated } from 'react-spring'
import styles from './Card.module.scss'
import { useState } from 'react'

const Card = ({ children, img, active, onClick }) => {
	const [isAnimating, setIsAnimating] = useState(false)
	const springProps = useSpring({
		transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
		config: { tension: 200, friction: 20 }
	})

	const handleOnClick = () => {
		setIsAnimating(true)
		onClick()
		setTimeout(() => setIsAnimating(false), 300)
	}
	return (
		<div
			className={active ? styles.activeBlock : styles.block}
			onClick={handleOnClick}
		>
			<div className={active ? styles.activeImage : styles.img}>
				<animated.img
					src={active ? img.active : img.disable}
					alt='image'
					draggable={false}
					style={springProps}
				/>
			</div>
			<div className={styles.title}>
				<p>{children}</p>
			</div>
		</div>
	)
}

export default Card
