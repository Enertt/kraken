import {useTrail, animated} from 'react-spring'
import styles from './Selector.module.scss'
import {useLocation, useNavigate} from 'react-router-dom'

export const nav_dropdown_items = [
    {id: 1, name: 'SSN Full', link: '/ssn-full'},
    {id: 2, name: 'SSN Last 4', link: '/ssn-last-4'},
    {id: 3, name: 'SSN Reverse', link: '/ssn-reverse'},
    {id: 4, name: 'BG', link: '/bg'},

    {id: 5, name: 'DL', link: '/dl'},
    {id: 6, name: 'DOB', link: '/dob'},
]

const Selector = () => {
    const navigate = useNavigate()

    const trailProps = useTrail(nav_dropdown_items.length, {
        opacity: 1,
        height: 'auto',
        from: {opacity: 0, height: 0}
    })

    const location = useLocation();

    return (
        <div className={styles.dropdown}>
            {trailProps.map((props, index) => (
                <animated.div
                    key={nav_dropdown_items[index].id}
                    style={props}
                    className={styles.dropdownItem}
                    onClick={() => navigate(nav_dropdown_items[index].link)}
                >
                    <div style={location.pathname === nav_dropdown_items[index].link ? {color: 'white'} : {}}>
                        <p>{nav_dropdown_items[index].name}</p>
                    </div>
                </animated.div>
            ))}
        </div>
    )
}

export default Selector
