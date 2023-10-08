import {useRef, useEffect} from 'react'
import styles from './Loader.module.scss'
import loadingAnimation from './load.webm';

const Loader = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.currentTime = 0
        videoRef.current.play()
    }, [])

    return (
        <div className={styles.loaderContainer}>
            <video
                ref={videoRef}
                src={loadingAnimation}
                autoPlay
                muted
                loop
            />
        </div>
    )
}

export default Loader
