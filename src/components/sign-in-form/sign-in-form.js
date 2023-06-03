import {useState} from "react";
import FormInput from "../form-input/form-input";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase";
import './sign-in-form.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const resetFormFields = () => {
        setFields(defaultFormFields)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('incorrect password for email')
                    break;
                default:
                    console.log('e',e)
            }
        }
    }

    return (
        <div className={'sign-up-container'}>
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'Email'}
                    value={email}
                    onChange={handleChange}
                    name='email'
                    required
                    type='email'
                />
                <FormInput
                    label={'Password'}
                    value={password}
                    onChange={handleChange}
                    name='password'
                    required
                    type='password'
                />
                <div className={'buttons-container'}>
                    <Button
                        type='submit'
                    >
                        Sign In
                    </Button>
                    <Button
                        type={'button'}
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        google Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm