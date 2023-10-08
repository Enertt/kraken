import {useNavigate} from 'react-router-dom'
import styles from './MyProfile.module.scss'
import MyProfileIcon from './assets/profileIcon.svg'
import {TOKEN} from "../../../../../app/api/app.constants.js";
import {useEffect, useState} from "react";
import {parseJwt} from "../../../../../app/helpers/helpers.js";



const MyProfile = () => {
    const navigate = useNavigate();
    const [userName, setUsername] = useState(parseJwt(localStorage.getItem(TOKEN)).sub || '...');

    useEffect(() => {
        setUsername(parseJwt(localStorage.getItem(TOKEN)).sub || '...')
    }, [])

    return (
        <div className={styles.wrapper} onClick={() => navigate('/profile')}>
            <div>
                <img
                    style={{marginTop: '16px'}}
                    width={66}
                    height={57}
                    src={MyProfileIcon}
                />
            </div>
            <div>
                <h3 style={{marginTop: '25px'}}>{userName}</h3>
                <p>My profile</p>
            </div>
        </div>
    )
}

export default MyProfile
