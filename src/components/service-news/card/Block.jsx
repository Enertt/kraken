import { useState } from 'react'
import styles from './Block.module.scss'

const Block = ({ markSvg, index, date = null, title, children, role }) => {
	const [isHovered, setIsHovered] = useState(true)

	return (
		<div
			className={`${styles.block} ${isHovered ? styles.blockHover : ''}`}
			// onMouseEnter={() => setIsHovered(true)}
			// onMouseLeave={() => setIsHovered(false)}
		>
			<div>
				<img
					className={`${styles.img} ${
						markSvg === 'Marker-red-icon.svg' ? styles.marker : undefined
					}`}
					src={markSvg}
					alt='marker'
					draggable={false}
				/>
			</div>
			<div className={styles.card}>
				<div className={styles.info}>
					<p className={index === 'Admin' ? styles.indexAdmin : undefined}>
						{index}
					</p>
					<p>{date}</p>
				</div>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
				<div className={styles.text}>
					<p>{children}</p>
				</div>
				<div className={styles.role}>
					<p className={role === 'Admin' ? styles.roleAdmin : undefined}>
						{role}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Block
