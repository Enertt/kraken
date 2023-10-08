import {useLocation, useNavigate} from 'react-router-dom'
import {navList} from './navbar-list'
import styles from './Navbar.module.scss'
import {Fragment, useEffect, useState} from 'react'
import Selector, {nav_dropdown_items} from './selector/Selector'
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedItemId} from '../../store/sidebarState/sidebarState.slice'
import {useSpring, animated} from 'react-spring'
import useMediaQuery from '../../hooks/useMediaQuery'

const Navbar = () => {
    const [isSelectorVisible, setIsSelectorVisible] = useState(false)
    const isBlanket = useMediaQuery('(max-width: 1024px)')
    const selectedItemId = useSelector(state => state.navbar.selectedItemId)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const arrowAnimation = useSpring({
        transform:
            selectedItemId === 1 && isSelectorVisible
                ? 'rotate(180deg)'
                : !isSelectorVisible && 'rotate(0deg)'
    })

    const selectorAnimation = useSpring({
        opacity: isSelectorVisible ? 1 : 0,
        height: isSelectorVisible ? 'auto' : 0
    })

    const location = useLocation();

    useEffect(() => {
        for (let i = 0; i < navList.length; i++) {
            if (location.pathname === navList[i].to) {
                dispatch(setSelectedItemId( navList[i].id));
                break;
            }
        }
        for (let i = 0; i < nav_dropdown_items.length; i++) {
            if (location.pathname === nav_dropdown_items[i].link) {
                dispatch(setSelectedItemId(1));
                setIsSelectorVisible(true);
                break;
            }
        }
    }, [])

    return (
        <div className={styles.nav}>
            {navList.map(link => {
                const isSelected = link.id === selectedItemId
                const handleItemClick = link => {
                    dispatch(setSelectedItemId(link.id))
                    navigate(link.to)
                    if (link.id === 1) {
                        // if(isSelectorVisible === true) {
                        //
                        // }
                        setIsSelectorVisible(!isSelectorVisible)
                    } else {
                        setIsSelectorVisible(false)
                    }
                }

                return (
                    <Fragment key={link.id}>
                        <div
                            className={`${styles.navList} ${isSelected ? styles.active : ''}`}
                            onClick={() => handleItemClick(link)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <g clipPath='url(#clip0_20_936)'>
                                    <path
                                        d='M11.9998 17.0049L9.71121 18.1489L8.21533 21.1406H15.7839L14.2884 18.1489L11.9998 17.0049Z'
                                        fill={isSelected ? '#A140FD' : '#7781A4'}
                                    />
                                    <path
                                        d='M21.0534 12.9015L18.4455 11.8147L19.0175 14.6745L17.6387 14.9505L16.3458 8.48438C16.1003 8.48438 13.2619 8.48438 13.4062 8.48438V7.07812H15.0098L13.9556 2.85938H10.3026L8.48438 4.67761C8.48438 4.82198 8.48438 7.69894 8.48438 7.54673L6.375 8.42555V15.5156H4.96875V13.4929L2.96784 14.2934L1.56075 19.7344H0V21.1406H6.64341L8.66363 17.1011L12 15.4326L15.3364 17.1011L17.3562 21.1406H24V19.7344H22.467L21.0534 12.9015Z'
                                        fill={isSelected ? '#A140FD' : '#7781A4'}
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_20_936'>
                                        <rect width='24' height='24' fill='white'/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className={styles.link}>
                                <p>{link.title}</p>
                            </div>
                            {link.id === 1 && (
                                <animated.svg
                                    style={{
                                        transform: arrowAnimation.transform
                                    }}
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                >
                                    <path
                                        d='M6 9L12 15L18 9'
                                        stroke={isSelected ? 'white' : '#7781A4'}
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </animated.svg>
                            )}
                        </div>
                        {isSelected && link.id === 1 && isSelectorVisible && (
                            <animated.div style={selectorAnimation}>
                                <Selector
                                    isSelectorVisible={isSelectorVisible}
                                    setIsSelectorVisible={setIsSelectorVisible}
                                />
                            </animated.div>
                        )}
                    </Fragment>
                )
            })}
            {!isBlanket && (
                <div className={styles.links}>
                    <div className={styles.rules} onClick={() => navigate('/rules')}>
                        Rules
                    </div>
                    <div className={styles.policy}>
                        All rights reserved © Kraken service
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
