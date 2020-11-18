import React, {useState} from 'react';
import {AuthContainer, ButtonsRow, HiderBlock, HiddenWrap} from './auth.styles';
import {Button, TextField} from "@material-ui/core";
import InputWithAdornmentComponent from "../../components/input-with-adornment/input-with-adornment.component";

import {userCredSignInStart, userCredSignUpStart, userGoogleAuthStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const INITIAL_STATE = {
    signInEmail: {value: '', touched: false, error: ''},
    signInPassword: {value: '', touched: false, error: ''},

    displayName: {value: '', touched: false, error: ''},
    signUpEmail: {value: '', touched: false, error: ''},
    signUpPassword: {value: '', touched: false, error: ''},
    signUpConfirmPassword: {value: '', touched: false, error: ''},

}

function AuthPage(props) {
    const {userCredSignInStart, userCredSignUpStart, userGoogleAuthStart} = props;
    const [formFields, setFormFields] = useState(INITIAL_STATE);
    const [hiddenBlock, setHiddenBlock] = useState(false)
    const hideBlock = () => setHiddenBlock(!hiddenBlock)
    const formatErrStatus = (name) => {
        // console.log('name',name)
        // console.log('formFields[name].touched', formFields[name].touched)
        return (!!(formFields[name].touched && formFields[name].error))
    }
    const formatHelperText = (name) => (formFields[name].touched && formFields[name].error ? formFields[name].error : '')
    const handleSubmit = (type) => event => {
        if (type === 'signIn') {
            if (!formFields.signInEmail.error && !formFields.signInPassword.error) {
                userCredSignInStart(formFields.signInEmail.value, formFields.signInPassword.value);
                // console.log('handle sign in')
            }
        } else if (type === 'signUp') {
            if (!formFields.displayName.error && !formFields.signUpEmail.error && !formFields.signUpPassword.error &&
                !formFields.signUpConfirmPassword.error) {
                userCredSignUpStart(formFields.displayName.value, formFields.signUpEmail.value, formFields.signUpPassword.value);
                // console.log('handle sign up')
            }
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
            <HiddenWrap hiddenBlock={hiddenBlock} onClick={hideBlock}>
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
                    <Button color="primary" onClick={handleSubmtest('signIn')}>Sign in</Button>
                    <Button variant="contained" color="primary" onClick={userGoogleAuthStart}>Sign in with
                        Google</Button>
                </ButtonsRow>
            </HiddenWrap>
            <HiderBlock hiddenBlock={hiddenBlock} onClick={hideBlock}>I do not have an account</HiderBlock>
            <HiddenWrap hiddenBlock={!hiddenBlock} onClick={hideBlock}>
                <h2>I do not have an account</h2>
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
                    <Button color="primary" onClick={handleSubmtest('signUp')}>Sign up</Button>
                    <Button variant="contained" color="primary" onClick={userGoogleAuthStart}>Sign up with
                        Google</Button>
                </ButtonsRow>
            </HiddenWrap>
            <HiderBlock hiddenBlock={!hiddenBlock} onClick={hideBlock}>I already have an account</HiderBlock>
        </AuthContainer>
    )


}

export default connect(null, {userCredSignInStart, userCredSignUpStart, userGoogleAuthStart})(AuthPage);