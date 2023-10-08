import {useState} from 'react'
import styles from './MessageBox.module.scss'
import SmileButton from './smile-button/SmileButton'
import {smiles} from './smile-button/smiles'
import {post_admin_send_message} from "../../../../app/api/admin.api.js";

const MessageBox = ({id}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSmileyClick = index => {
        const selectedSmiley = smiles[index]
        setInputValue(prevValue => prevValue + selectedSmiley)
    }

    const handleChange = event => {
        setInputValue(event.target.value)
    }

    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        setLoading(true)

        post_admin_send_message(id, inputValue).then(r => {
            console.log(r)
            if (r.status === 200) {
                setInputValue('')
                // getTicket()
            }
        }).catch(e => {
            console.log(e)

        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }} className={styles.block}>
            <SmileButton onSmileyClick={handleSmileyClick}/>
            <input
                type='text'
                placeholder='Type a message....'
                value={inputValue}
                onChange={handleChange}
            />
            <div className={styles.buttons}>
                <button type={'submit'} className={styles.send}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='22'
                        viewBox='0 0 22 22'
                        fill='none'
                    >
                        <path
                            d='M19.6604 10.1801L3.16039 1.93011C2.83007 1.7636 2.42992 1.81373 2.14973 2.05722C1.86954 2.30071 1.76391 2.68833 1.88118 3.04013L4.22896 10.0834H11.0004C11.5071 10.0834 11.9171 10.4934 11.9171 11.0001C11.9171 11.5068 11.5071 11.9168 11.0004 11.9168H4.22896L1.88118 18.9601C1.76391 19.3119 1.86954 19.6995 2.14973 19.943C2.31982 20.0907 2.53466 20.1668 2.7504 20.1668C2.89005 20.1668 3.03059 20.1345 3.16039 20.0701L19.6604 11.8201C19.971 11.6643 20.1671 11.3474 20.1671 11.0001C20.1671 10.6528 19.971 10.3359 19.6604 10.1801Z'
                            fill='#7781A4'
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default MessageBox
