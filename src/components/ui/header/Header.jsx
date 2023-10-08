import {useState} from "react";
import styles from "./Header.module.scss";

import useMediaQuery from "../../../hooks/useMediaQuery.js";
import KrakenMobile from "../layout/components/MyProfile/assets/kraken.svg";
import Svg from "../sidebar/assets/icon.svg";
import Time from "../layout/components/Time/Time.jsx";
import List from "../layout/components/List/List.jsx";
import MyProfile from "../layout/components/MyProfile/MyProfile.jsx";
import ExitActiveIcon from "../layout/components/MyProfile/assets/exit_active.png";
import ExitIcon from "../layout/components/MyProfile/assets/exit.png";
import {CSSTransition} from "react-transition-group";
import MobileBar from "../layout/components/MobileBar/MobileBar.jsx";

export const Header = () => {
    const isBlanket = useMediaQuery('(max-width: 1024px)')
    const isMobile = useMediaQuery('(max-width: 576px)')
    const isTimeVisible = useMediaQuery('(max-width: 668px)')

    const [isMobileBar, setIsMobileBar] = useState(false)
    const [isImgHovered, setIsImgHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsImgHovered(true)
    }

    const handleMouseLeave = () => {
        setIsImgHovered(false)
    }

    const handleLogout = () => {
        localStorage.clear()

        window.location.href = '/login'
    }

    return <>
        <div className={styles.header}>
            <div className={styles.wrapper}>
                {isMobile && (
                    <img alt={''} src={KrakenMobile} style={{objectFit: 'contain'}}/>
                )}
                {isBlanket && !isMobile && <img alt={''} src={Svg}/>}
                {!isMobile && !isTimeVisible && <Time/>}
                {!isMobile && <List/>}
                {!isBlanket && <MyProfile/>}
                {!isBlanket && (
                    <img alt={''}
                         width='95px'
                         height='89px'
                         style={{
                             marginLeft: '20px',
                             zIndex: '0',
                             cursor: 'pointer'
                         }}
                         src={isImgHovered ? ExitActiveIcon : ExitIcon}
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         onClick={handleLogout}
                    />
                )}
                {isBlanket && (
                    <svg
                        onClick={() => setIsMobileBar(!isMobileBar)}
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='19'
                        viewBox='0 0 22 19'
                        fill='none'
                    >
                        <path
                            d='M0 2.57174C0 3.41919 0.556437 4.16496 1.37556 4.38226C3.56391 4.96281 7.90646 6 11 6C14.0935 6 18.4361 4.96281 20.6244 4.38226C21.4436 4.16496 22 3.41919 22 2.57174C22 1.28916 20.7633 0.35721 19.5185 0.666138C17.1742 1.24792 13.6343 2 11 2C8.36574 2 4.82579 1.24792 2.48153 0.666138C1.23671 0.35721 0 1.28916 0 2.57174Z'
                            fill='#7781A4'
                        />
                        <path
                            d='M0 8.57174C0 9.41919 0.556437 10.165 1.37556 10.3823C3.56391 10.9628 7.90646 12 11 12C14.0935 12 18.4361 10.9628 20.6244 10.3823C21.4436 10.165 22 9.41919 22 8.57174C22 7.28916 20.7633 6.35721 19.5185 6.66614C17.1742 7.24792 13.6343 8 11 8C8.36574 8 4.82579 7.24792 2.48153 6.66614C1.23671 6.35721 0 7.28916 0 8.57174Z'
                            fill='#7781A4'
                        />
                        <path
                            d='M0 16.4283C0 15.5808 0.556437 14.835 1.37556 14.6177C3.56391 14.0372 7.90646 13 11 13C14.0935 13 18.4361 14.0372 20.6244 14.6177C21.4436 14.835 22 15.5808 22 16.4283C22 17.7108 20.7633 18.6428 19.5185 18.3339C17.1742 17.7521 13.6343 17 11 17C8.36574 17 4.82579 17.7521 2.48153 18.3339C1.23671 18.6428 0 17.7108 0 16.4283Z'
                            fill='#7781A4'
                        />
                    </svg>
                )}
                <CSSTransition
                    in={isMobileBar}
                    classNames='alert'
                    timeout={300}
                    unmountOnExit
                >
                    <MobileBar close={() => setIsMobileBar(!isMobileBar)}/>
                </CSSTransition>
            </div>
        </div>
    </>
}
