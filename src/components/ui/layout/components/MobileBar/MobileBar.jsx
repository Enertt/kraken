import {useEffect, useRef, useState} from 'react'
import useMediaQuery from '../../../../../hooks/useMediaQuery'
import List from '../List/List'
import MyProfile from '../MyProfile/MyProfile'
import Time from '../Time/Time'
import ExitIcon from '../MyProfile/assets/exit.png'
import ExitActiveIcon from '../MyProfile/assets/exit_active.png'
import styles from './MobileBar.module.scss'
import Navbar from '../../../../navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import {TOKEN} from "../../../../../app/api/app.constants.js";

const MobileBar = ({close}) => {
    const isBlanket = useMediaQuery('(max-width: 1024px)')
    const isMobile = useMediaQuery('(max-width: 576px)')
    const isTimeVisible = useMediaQuery('(max-width: 668px)')

    const [isImgHovered, setIsImgHovered] = useState(false)

    const navigate = useNavigate()

    const handleMouseEnter = () => {
        setIsImgHovered(true)
    }

    const handleMouseLeave = () => {
        setIsImgHovered(false)
    }
    const wrapperRef = useRef(null)
    const isMounted = useRef(false)

    const handleClickOutside = event => {
        if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target) &&
            isMounted.current
        ) {
            close()
        }
        isMounted.current = true
    }

    const handleLogout = () => {
        localStorage.clear()

        window.location.href = '/login'
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])
    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <div className={styles.section}>
                <Navbar/>
                {isMobile && <List/>}
                {isMobile && isTimeVisible && <Time/>}
                {isBlanket && (
                    <div className={styles.links}>
                        <div className={styles.rules} onClick={() => navigate('/rules')}>
                            Rules
                        </div>
                        <div className={styles.policy}>
                            All rights reserved © Kraken service
                        </div>
                    </div>
                )}
                {isBlanket && <MyProfile/>}
                {isBlanket && (
                    <img
                        className={styles.exitBtn}
                        width='95px'
                        height='89px'
                        style={{
                            marginLeft: '20px',
                            zIndex: '0'
                        }}
                        src={isImgHovered ? ExitActiveIcon : ExitIcon}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleLogout}
                    />
                )}
            </div>
        </div>
    )
}

export default MobileBar
