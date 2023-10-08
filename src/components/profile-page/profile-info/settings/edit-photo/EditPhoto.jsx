import styles from './EditPhoto.module.scss'
import profile from '../../../../ui/layout/components/MyProfile/assets/profileIcon.svg'
import ButtonClassicTwo from '../../../../ui/button/button-classic-two/ButtonClassicTwo'
const EditPhoto = () => {
	return (
		<div className={styles.block}>
			<div className={styles.img}>
				<img src={profile} alt='My profile' />
			</div>
			<div className={styles.button}>
				<ButtonClassicTwo>Edit photo</ButtonClassicTwo>
			</div>
		</div>
	)
}

export default EditPhoto
