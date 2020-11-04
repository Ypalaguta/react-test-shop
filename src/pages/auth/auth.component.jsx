import React, {useState} from 'react';
import {AuthContainer, ButtonsRow} from './auth.styles';
import {Button, TextField} from "@material-ui/core";
import {signInWithGoogle} from "../../firebase/firebase.utils";
import InputWithAdornmentComponent from "../../components/input-with-adornment/input-with-adornment.component";


const INITIAL_STATE = {
    signInEmail: {value: '', touched: false, error: ''},
    signInPassword: {value: '', touched: false, error: ''},

    displayName: {value: '', touched: false, error: ''},
    signUpEmail: {value: '', touched: false, error: ''},
    signUpPassword: {value: '', touched: false, error: ''},
    signUpConfirmPassword: {value: '', touched: false, error: ''},

}


function AuthPage(props) {
    const [formFields, setFormFields] = useState(INITIAL_STATE);
    const formatErrStatus = (name) => {
        // console.log('name',name)
        // console.log('formFields[name].touched', formFields[name].touched)
        return (!!(formFields[name].touched && formFields[name].error))
    }
    const formatHelperText = (name) => (formFields[name].touched && formFields[name].error ? formFields[name].error : '')
    const handleSubmit = (type) => event => {
        if (type === 'signIn') {
            if (!formFields.signInEmail.error && !formFields.signInPassword.error)
                console.log('handle sign in')
            else
                console.log('handle sign in denied')
        } else if (type === 'signUp') {
            if (!formFields.displayName.error && !formFields.signUpEmail.error && !formFields.signUpPassword.error && !formFields.signUpConfirmPassword.error)
                console.log('handle sign up')
            else
                console.log('handle sign up denied')
        }
    }
    const validateField = (formFields) => {
        const newFormFields = {...formFields}
        for (let key in newFormFields) {
            let item = newFormFields[key]
            let value = newFormFields[key].value
            item.error = '';
            if (key.toLowerCase().includes('email')) {
                if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) item.error = 'invalid email'
            }
            if (key.toLowerCase().includes('name')) {
                if (!value.match(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/g)) item.error = 'invalid name'
            }
            if (key === 'signUpPassword' || key === 'signUpConfirmPassword') {
                if (newFormFields.signUpConfirmPassword.value !== newFormFields.signUpPassword.value) {
                    item.error = 'passwords not match'
                }
            }
            if (key.toLowerCase().includes('password')) {
                if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) item.error = 'min 8 characters, at least one letter and one number'
            }
        }
        setFormFields(newFormFields);
    }
    const handleInput = event => {
        const newFormFields = {...formFields};
        newFormFields[event.target.name].value = event.target.value;
        setFormFields(newFormFields);
        validateField(newFormFields)
    }
    const handleBlur = event => {
        const newFormFields = {...formFields};
        newFormFields[event.target.name].touched = true;
        setFormFields(newFormFields);
        // validateField(event.target.name, event.target.value)

    }
    // console.log(formFields)
    return (
        <AuthContainer>
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <TextField id="signInEmail-standard-basic" label="Email" name='signInEmail' onBlur={handleBlur}
                           onInput={handleInput}
                           error={formatErrStatus('signInEmail')}
                           helperText={formatHelperText('signInEmail')}/>
                <InputWithAdornmentComponent name='signInPassword' onBlur={handleBlur} onInput={handleInput}
                                             error={formatErrStatus('signInPassword')}
                                             helperText={formatHelperText('signInPassword')}/>
                <ButtonsRow>
                    <Button color="primary" onClick={handleSubmit('signIn')}>Sign in</Button>
                    <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in with
                        Google</Button>
                </ButtonsRow>
            </div>
            <div>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <TextField id="displayName-standard-basic" label="Display name" name='displayName' onBlur={handleBlur}
                           onInput={handleInput}
                           error={formatErrStatus('displayName')} helperText={formatHelperText('displayName')}/>
                <TextField id="signUpEmail-standard-basic" label="Email" name='signUpEmail' onBlur={handleBlur}
                           onInput={handleInput} error={formatErrStatus('signUpEmail')}
                           helperText={formatHelperText('signUpEmail')}/>
                <InputWithAdornmentComponent name='signUpPassword' onBlur={handleBlur} onInput={handleInput}
                                             error={formatErrStatus('signUpPassword')}
                                             helperText={formatHelperText('signUpPassword')}/>
                <InputWithAdornmentComponent name='signUpConfirmPassword' onBlur={handleBlur} onInput={handleInput}
                                             error={formatErrStatus('signUpConfirmPassword')}
                                             helperText={formatHelperText('signUpConfirmPassword')}/>
                <ButtonsRow>
                    <Button color="primary" onClick={handleSubmit('signUp')}>Sign up</Button>
                    <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign up with
                        Google</Button>
                </ButtonsRow>
            </div>
        </AuthContainer>
    )


}

export default AuthPage;