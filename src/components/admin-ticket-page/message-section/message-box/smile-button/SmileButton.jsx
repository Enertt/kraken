import { useState } from 'react'
import styles from './SmileButton.module.scss'
import { smiles } from './smiles'
const SmileButton = ({ onSmileyClick }) => {
	const [isSmilesOpen, setIsSmilesOpen] = useState(false)

	const toggleSmiles = () => {
		setIsSmilesOpen(prevState => !prevState)
	}
	const handleSmileyClick = index => {
		onSmileyClick(index)
	}
	return (
		<div className={styles.block} onClick={toggleSmiles}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='22'
				height='22'
				viewBox='0 0 22 22'
				fill='none'
			>
				<g clipPath='url(#clip0_45_10681)'>
					<path
						d='M11 0C4.92543 0 0 4.92479 0 11C0 17.0752 4.92543 22 11 22C17.0759 22 22 17.0752 22 11C22 4.92479 17.0759 0 11 0ZM15.0596 7.33676C15.9293 7.33676 16.6352 8.04269 16.6352 8.91241C16.6352 9.78213 15.9286 10.4881 15.0596 10.4881C14.1898 10.4881 13.4839 9.78213 13.4839 8.91241C13.4839 8.04269 14.1898 7.33676 15.0596 7.33676ZM6.9398 7.33676C7.81016 7.33676 8.51545 8.04269 8.51545 8.91241C8.51545 9.78213 7.81016 10.4881 6.9398 10.4881C6.07007 10.4881 5.36415 9.78213 5.36415 8.91241C5.36415 8.04269 6.07072 7.33676 6.9398 7.33676ZM16.9352 14.8245C15.5876 16.781 13.3683 17.9488 11 17.9488C8.63042 17.9488 6.41051 16.781 5.06482 14.8238C4.76292 14.3858 4.87404 13.7858 5.31276 13.4839C5.75147 13.1814 6.35077 13.2931 6.65267 13.7319C7.6393 15.1662 9.26505 16.0218 11.0006 16.0218C12.7362 16.0218 14.3607 15.1662 15.3499 13.7319C15.6518 13.2944 16.2505 13.1833 16.6898 13.4846C17.126 13.7865 17.2364 14.3858 16.9352 14.8245Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_45_10681'>
						<rect width='22' height='22' fill='white' />
					</clipPath>
				</defs>
			</svg>
			{isSmilesOpen && (
				<div className={styles.smiles}>
					{smiles.map((smile, index) => (
						<p key={index} onClick={() => handleSmileyClick(index)}>
							{smile}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

export default SmileButton
