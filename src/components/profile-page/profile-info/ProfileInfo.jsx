import styles from './ProfileInfo.module.scss'
import profile from '../../ui/layout/components/MyProfile/assets/profileIcon.svg'
import Status from './status/Status'
import Balance from './balance/Balance'
import ButtonClassicTwo from '../../ui/button/button-classic-two/ButtonClassicTwo'
import ProfileData from './profile-data/ProfileData'
import balanceIcon from './assets/chest-icon.svg'
import inviteIcon from './assets/add-friend-icon.svg'
import moneyIcon from './assets/money-icon.svg'
import WithdrawalRequest from '../withdrawal-request/WithdrawalRequest'
import {useEffect, useState} from 'react'
import PartnerProgram from './partner-program/PartnerProgram'
import Settings from './settings/Settings'
import { useGetUserBalanceQuery, useGetUserStatusQuery } from '../../../app/api/api.js'
import {TOKEN} from "../../../app/api/app.constants.js";
import {parseJwt} from "../../../app/helpers/helpers.js";

const ProfileInfo = () => {
	const [showWithdrawalRequest, setShowWithdrawalRequest] = useState(false)
	const [showPartnersProgram, setShowPartnersProgram] = useState(false)
	const [showSetting, setShowSetting] = useState(false)
	const { data: balance } = useGetUserBalanceQuery()
	const { data: status } = useGetUserStatusQuery()
	// console.log(status)
	// console.log(balance)
	const statusData = status?.map(item => item.status)

	const handleRequestWithdrawal = () => {
		setShowWithdrawalRequest(!showWithdrawalRequest)
	}
	const handlePartnersProgram = () => {
		setShowPartnersProgram(!showPartnersProgram)
		setShowSetting(false)
	}
	const handleSetting = () => {
		setShowSetting(!showSetting)
		setShowPartnersProgram(false)
	}

	const [userName, setUsername] = useState(parseJwt(localStorage.getItem(TOKEN)).sub || '...');

	useEffect(() => {
		setUsername(parseJwt(localStorage.getItem(TOKEN)).sub || '...')
	}, [])

	return (
		<>
			<div className={styles.block}>
				<div className={styles.firstSection}>
					<div className={styles.img}>
						<img src={profile} alt='My profile' />
					</div>
					<div className={styles.group}>
						<div className={styles.groupName}>
							<p>My group</p>
						</div>
						<div className={styles.role}>
							{status?.map((item, index) => (
								<p key={index}>{item.group}</p>
							))}
						</div>
						<div className={styles.profileName}>
							<p>{userName}</p>
						</div>
					</div>
					<div className={styles.status}>
						<div className={styles.statusName}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
							>
								<path
									d='M8.00033 0C3.58334 0 0 3.57868 0 7.99579C0 12.4171 3.58334 16 8.0003 16C12.4197 16 16 12.4171 16 7.99579C16 3.57868 12.4197 0 8.00033 0ZM8.57044 12.4472C8.38463 12.6126 8.16929 12.6957 7.92534 12.6957C7.67295 12.6957 7.45279 12.614 7.26487 12.4505C7.07665 12.2873 6.98236 12.0587 6.98236 11.7651C6.98236 11.5046 7.07362 11.2853 7.25554 11.1076C7.43746 10.9299 7.66061 10.8411 7.92534 10.8411C8.18585 10.8411 8.40511 10.9299 8.58311 11.1076C8.7608 11.2853 8.84995 11.5045 8.84995 11.7651C8.84962 12.0545 8.75654 12.2819 8.57044 12.4472ZM10.8873 6.70351C10.7446 6.96823 10.575 7.19649 10.3784 7.38896C10.1823 7.5814 9.82965 7.90484 9.32064 8.35958C9.18029 8.48789 9.06736 8.60052 8.98274 8.69748C8.89811 8.79477 8.83487 8.88357 8.79359 8.9643C8.75202 9.045 8.72012 9.12573 8.69752 9.20642C8.67492 9.28682 8.64091 9.42868 8.59482 9.63134C8.51653 10.0614 8.27047 10.2764 7.85695 10.2764C7.6419 10.2764 7.46121 10.2062 7.31393 10.0656C7.16724 9.92496 7.09407 9.71626 7.09407 9.43921C7.09407 9.09198 7.14798 8.7911 7.2555 8.53664C7.36243 8.28215 7.50548 8.059 7.68318 7.86657C7.86117 7.67413 8.10089 7.44583 8.40297 7.18111C8.66769 6.94952 8.85895 6.77487 8.9767 6.65709C9.09474 6.53905 9.19385 6.40774 9.27425 6.26318C9.35529 6.11831 9.39504 5.96141 9.39504 5.79187C9.39504 5.46091 9.27248 5.18204 9.02612 4.95466C8.78007 4.72729 8.46262 4.61344 8.07381 4.61344C7.61875 4.61344 7.28384 4.72818 7.0688 4.95766C6.85376 5.18715 6.67217 5.52504 6.52308 5.97167C6.38213 6.43909 6.11529 6.67276 5.72285 6.67276C5.49124 6.67276 5.2958 6.59114 5.13648 6.4279C4.97746 6.26466 4.89795 6.0879 4.89795 5.89757C4.89795 5.50485 5.02414 5.10671 5.27624 4.70347C5.52863 4.30022 5.89666 3.96622 6.38061 3.7018C6.86428 3.43708 7.42901 3.30455 8.07381 3.30455C8.67344 3.30455 9.2026 3.41537 9.66159 3.63674C10.1206 3.85778 10.4753 4.15866 10.7256 4.5393C10.9756 4.91965 11.1009 5.33316 11.1009 5.77979C11.1015 6.13069 11.0301 6.43879 10.8873 6.70351Z'
									fill='#363B54'
								/>
							</svg>
							<p>My status</p>
						</div>
						<div>
							<Status>{statusData}</Status>
						</div>
					</div>
					<div className={styles.balances}>
						<Balance name={'Balance'} balance={`$${balance?.balance}`} />
						<Balance name={'Partners balance'} balance={'$105'} />
					</div>

				</div>
				<div className={styles.buttonList}>
					{/* <div className={styles.button}> */}
						<ButtonClassicTwo clickHandler={handleRequestWithdrawal}>
							Request Withdrawal
						</ButtonClassicTwo>
					{/* </div> */}
					<ButtonClassicTwo clickHandler={handlePartnersProgram}>
						Partners program
					</ButtonClassicTwo>
					<ButtonClassicTwo clickHandler={handleSetting}>
						Settings
					</ButtonClassicTwo>
				</div>
			</div>
			<div className={styles.profileData}>
				<ProfileData
					svg={balanceIcon}
					purpose={'balance'}
					title={'Balance for all time'}
					amount={'$7961'}
				/>
				<ProfileData
					svg={inviteIcon}
					purpose={'invite'}
					title={'Invited users'}
					amount={'$7961'}
				/>
				<ProfileData
					svg={moneyIcon}
					purpose={'earn'}
					title={'Earned from partners'}
					amount={'$7961'}
				/>
			</div>
			{showWithdrawalRequest && (
				<WithdrawalRequest clickHandler={handleRequestWithdrawal} />
			)}
			{showPartnersProgram && <PartnerProgram />}
			{showSetting && <Settings />}
		</>
	)
}

export default ProfileInfo
