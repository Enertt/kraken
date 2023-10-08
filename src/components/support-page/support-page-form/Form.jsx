import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import TextField from '../../ui/field/TextField'
import styles from './Form.module.scss'
import {useState} from "react";
import {post_create_ticket} from "../../../app/api/public.api.js";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [success, setSuccess] = useState(false);

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setError(false)
        if (subject.trim() !== '' && message.trim() !== '') {
            post_create_ticket(subject, message).then(r => {
                console.log(r)
                if (r.status === 200) {
                    setSubject('')
                    setMessage('')
                    setSuccess(true)
                } else {
                    setError(true)
                }
            }).catch(e => {
                setError(true)
                console.log(e)
            }).finally(() => {
                setLoading(false)


            })
        } else {
            setError(true)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.newPassInput}>
                <label className={`${error ? styles.labelError : ''}`}>
                    Title tickets
                </label>
                <Field
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    error={error}
                    name='title'
                    required
                    type='text'
                    placeholder={
                        'Enter title ticket'}
                    autoComplete='off'
                />
            </div>

            <div className={styles.newPassInput}>
                <label className={`${error ? styles.labelError : ''}`}>
                    Message
                </label>

                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    error={error}
                    name='message'
                    type='text'
                    placeholder={'Type something if you want...'}
                    autoComplete='off'
                />
            </div>
            <div className={styles.button}>
                <Button onClick={handleSubmit}>{loading ? 'Loading' : 'Open ticket'}</Button>
            </div>
            <div style={{color: '#498a57', fontSize: 18}}>
                {success && 'Thanks for the message. We will contact you soon.'}
            </div>
            <div>
                {error && 'This ticket has already been created.'}
            </div>
        </form>
    )
}

export default Form
