import { useState } from 'react'
import styles from './TextArea.module.scss'
const TextArea = ({ onInputChange }) => {
	const [inputValue, setInputValue] = useState('')

	const handleChange = event => {
		const value = event.target.value
		setInputValue(value)
		onInputChange(value) // Notify the parent component about the input change
	}
	return (
		<div className={styles.block}>
			<div className={styles.strokeList}>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
				<p>8</p>
				<p>9</p>
				<p>10</p>
				<p>11</p>
				<p>12</p>
			</div>
			<div className={styles.textarea}>
				<textarea value={inputValue} onChange={handleChange} />
			</div>
		</div>
	)
}

export default TextArea
