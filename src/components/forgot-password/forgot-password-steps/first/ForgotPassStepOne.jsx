import { useState } from 'react'
import styles from './ForgotPassStepOne.module.scss'
import Selector from '../../selector/Selector'

const ForgotPassStepOne = ({ handleOptionSelect }) => {
	const [selectedOption, setSelectedOption] = useState(0)

	const handleSelect = index => {
		setSelectedOption(index)
		handleOptionSelect(index)
	}
	return (
		<div className={styles.block}>
			<div className={styles.title}>
				<p>Please Select option to send link reset password</p>
			</div>
			<div className={styles.section}>
				<Selector
					svg={
						selectedOption === 1
							? 'Mail-disable-icon.svg'
							: 'Mail-active-icon.svg'
					}
					title={'Reset via Email'}
					selected={selectedOption === 0}
					onClick={() => handleSelect(0)}
				>
					Link reset will be send to your
					<br /> email address registered
				</Selector>
				<Selector
					svg={
						selectedOption === 0
							? 'Scan-disable-icon.svg'
							: 'Scan-active-icon.svg'
					}
					title={'Reset via 2FA'}
					selected={selectedOption === 1}
					onClick={() => handleSelect(1)}
				>
					Will you be able to recover your password using 2FA protection
				</Selector>
			</div>
		</div>
	)
}

export default ForgotPassStepOne
