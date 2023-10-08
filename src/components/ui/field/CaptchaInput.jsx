import styles2 from './Field.module.scss'
import styles from './captchaInput.module.css'

import {useState, useEffect} from "react";
import {get_captcha} from "../../../app/api/public.api.js";

const CaptchaInput = ({error, onChange, value}) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState('');


    useEffect(() => {
        // Вызываем getCaptcha только при первой отрисовке компонента
        get_captcha().then(r => {
            if (r.status === 200) {
                setImg(r.data)
                setOpen(true); // Открываем капчу после загрузки изображения
            }
        }).catch(e => {
            // Обработка ошибки
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    function getCaptcha() {
        setLoading(true)
        setOpen(true)
        get_captcha().then(r => {
            // console.log(r.data)
            if (r.status === 200) {
                // const blobURL = URL.createObjectURL(r.data);
                setImg(r.data)
            }
        }).catch(e => {
            // console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }


    return (
        <div className={styles.input} style={{position: "relative"}}>
            <input
                className={`${styles2.input} ${error ? styles2.errorInput : ''}`}
                onChange={onChange}
                value={value}
                placeholder='Enter Captcha'
            />
            <div className={styles.captchaNumbers}>

                <button
                    type={'button'}
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault()
                        // getCaptcha();
                    }}

                    style={{textAlign: "center", fontSize: 24, justifyContent: 'center'}}
                >
                    {loading ? "..." : ''}
                </button>
            </div>
            <div className={styles.captchaBtn}>
                <div>Captcha</div>
                <div  className={styles.captchaBtnRefresh}>refresh captcha</div>
            </div>

            {
            //open &&
                <div className={styles.captcha_img} onClick={() => {
                    getCaptcha()
                    setOpen(true)
                }}
                     style={{backgroundImage: `url(${img})`}}/>}


        </div>
    )
};

export default CaptchaInput;
