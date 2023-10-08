import logo from '/Logo.svg'
import vector from '/Vector.svg'
import styles from './LoginLayout.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import smallTentacle from '/Tentacle-small.svg'
import bigTentacle from '/Tentacle-big.svg'

const LoginLayout = ({ children, heading = '', backlink = '/login' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}
	return (
		<section className={styles.wrapper}>
			<div className={styles.block}>
				{pathname === '/login' || pathname === '/successful-registration' ? (
					''
				) : (
					<div className={styles.back} onClick={() => navigate(backlink)}>
						<button
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={isHovered ? styles.activeButton : styles.disableButton}
						>
							<img
								src={
									isHovered ? 'Arrow-active-icon.svg' : 'Arrow-disable-icon.svg'
								}
								alt='back'
							/>
						</button>
					</div>
				)}
				<div className={styles.imgVector}>
					<img src={vector} alt='vector' />
				</div>
				<div className={styles.heading}>
					<div className={styles.imgLogo}>
						<img src={logo} alt='logo' />
					</div>
					<div className={styles.title}>
						<p>KRAKEN SERVICE</p>
						{heading && <p>{heading}</p>}
					</div>
					{children && (
						<div style={{ width: '80%', marginTop: '15px' }}>{children}</div>
					)}
					<div className={styles.bgTentacles}>
						<img
							className={styles.smallTentacle}
							src={smallTentacle}
							alt='Tentacles'
						/>
						<img
							className={styles.bigTentacle}
							src={bigTentacle}
							alt='Tentacles'
						/>
						<img
							className={styles.smallTentacleReverse}
							src={smallTentacle}
							alt='Tentacles'
						/>
						<img
							className={styles.bigTentacleReverse}
							src={bigTentacle}
							alt='Tentacles'
						/>
					</div>
				</div>

				<div className={styles.formShadow} />
			</div>
			<div className={styles.ellipseOne} />
			<div className={styles.ellipseTwo} />
			<div className={styles.ellipseTree} />
			<div className={styles.ellipseFour} />
		</section>
	)
}

export default LoginLayout
