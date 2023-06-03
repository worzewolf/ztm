import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import './sign-up-form.scss'
import Button from "../button/button";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFields] = useState(defaultFormFields);
    const {
        displayName,
        email,
        password,
        confirmPassword
    } = formFields;

    const resetFormFields = () => {
        setFields(defaultFormFields)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            )

            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (e) {
            if(e.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')
            } else {
                console.log('error when authorizing with email and password', e)
            }
        }
    }

    return (
        <div className={'sign-up-container'}>
            <h2>Don't have an account</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'Name'}
                    value={displayName}
                    onChange={handleChange}
                    name='displayName'
                    required
                    type='text'
                />
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
                <FormInput
                    label={'Confirm Password'}
                    value={confirmPassword}
                    onChange={handleChange}
                    name='confirmPassword'
                    required
                    type='password'
                />
                <Button
                    type='submit'
                >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm