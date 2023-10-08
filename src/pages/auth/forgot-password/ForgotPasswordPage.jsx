import LoginLayout from '../../../components/login-layout/LoginLayout.jsx'
import ForgotPassStepOne from '../../../components/forgot-password/forgot-password-steps/first/ForgotPassStepOne.jsx'
import ForgotPassStepTwo from '../../../components/forgot-password/forgot-password-steps/second/ForgotPassStepTwo.jsx'
import ForgotPassStepThree from '../../../components/forgot-password/forgot-password-steps/third/ForgotPassStepThree.jsx'
import ForgotPassStepFour from '../../../components/forgot-password/forgot-password-steps/fourth/ForgotPassStepFour.jsx'
import {useState} from 'react'
import Button from '../../../components/ui/button/Button.jsx'
import styles from './ForgotPasswordPage.module.scss'

const ForgotPass = () => {
    const components = [
        ForgotPassStepOne,
        ForgotPassStepTwo,
        ForgotPassStepThree,
        ForgotPassStepFour
    ]

    // eslint-disable-next-line no-unused-vars
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)
    const Component = components[currentIndex]

    const [code, setCode] = useState('');

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1)
    }

    const handleOptionSelect = option => {
        setSelectedOption(option)
    }

    return (
        <LoginLayout heading='Forgot password' backlink='/login'>
            {currentIndex === 0 ? (
                <Component
                    selectedOption={selectedOption}
                    handleOptionSelect={handleOptionSelect}
                />
            ) : (
                <Component handleNext={handleNext} code={code} setCode={setCode}/>
            )}
            <div className={`${currentIndex === 2 ? styles.button2 : styles.button}`}>
                {currentIndex === 0 && (
                    <Button clickHandler={() => {
                        setCurrentIndex(prevIndex => prevIndex + 1)
                    }}>Send link to email</Button>
                )}
                {/*{currentIndex > 1 && currentIndex < components.length - 1 && (*/}
                {/*    <Button clickHandler={handleNext}>Recovery</Button>*/}
                {/*)}*/}
            </div>
        </LoginLayout>
    )
}

export default ForgotPass
