import { useState } from 'react'
import styles from './PhotoBlock.module.scss'
import { useSpring, animated } from 'react-spring'
const PhotoBlock = ({ description, img }) => {
	const [isHovered, setHovered] = useState(false)

	const blurAnimation = useSpring({
		filter: isHovered ? 'blur(3px)' : 'blur(0px)'
	})

	const textAnimation = useSpring({
		y: isHovered ? 0 : 50,
		opacity: isHovered ? 1 : 0
	})
	return (
		<div
			className={styles.image}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<animated.img src={img} alt='kraken' style={blurAnimation} />
			<animated.div className={styles.text} style={textAnimation}>
				<p>{description}</p>
			</animated.div>
		</div>
	)
}

export default PhotoBlock
