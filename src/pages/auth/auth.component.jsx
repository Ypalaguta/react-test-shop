import React, {useState} from 'react';
import {AuthContainer, ButtonsRow} from './auth.styles';
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {signInWithGoogle} from "../../firebase/firebase.utils";


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
    const handleClickShowPassword = (setter, field) => () => setter(!field);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const [showSignInPassword, setShowSignInPassword] = useState(false);
    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
    const formatErrStatus = (name) => {
        // console.log('name',name)
        // console.log('formFields[name].touched', formFields[name].touched)
        return (!!(formFields[name].touched && formFields[name].error))
    }
    const formatHelperText = (name) => (formFields[name].touched && formFields[name].error ? formFields[name].error : '')
    const handleSubmit = (type) => event => {
        if(type==='signIn'){
            console.log('handle sign in')
        } else if(type==='signUp') {
            console.log('handle sign up')
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
            if (key === 'signUpPassword' ||key === 'signUpConfirmPassword') {
                if (newFormFields.signUpConfirmPassword.value !== newFormFields.signUpPassword.value ) {
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
    console.log(formFields)
    return (
        <AuthContainer>
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <TextField label="Email" name='signInEmail' onBlur={handleBlur} onInput={handleInput}
                           error={formatErrStatus('signInEmail')}
                           helperText={formatHelperText('signInEmail')}/>
                <FormControl>
                    <InputLabel htmlFor="signInPassword-adornment-password">Password</InputLabel>
                    <Input id="signInPassword-adornment-password" name='signInPassword' onBlur={handleBlur}
                           onInput={handleInput}
                           type={showSignInPassword ? 'text' : 'password'}
                           aria-describedby="signInPassword-helper-text"
                           error={formatErrStatus('signInPassword')}
                           endAdornment={
                               <InputAdornment position="end">
                                   <IconButton
                                       aria-label="toggle password visibility"
                                       onClick={handleClickShowPassword(setShowSignInPassword, showSignInPassword)}
                                       onMouseDown={handleMouseDownPassword}
                                   >
                                       {showSignInPassword ? <Visibility/> : <VisibilityOff/>}
                                   </IconButton>
                               </InputAdornment>
                           }/>
                    <FormHelperText id="signInPassword-helper-text" error>{formatHelperText('signInPassword')}</FormHelperText>
                </FormControl>
                <ButtonsRow>
                    <Button color="primary" onClick={handleSubmit('signIn')}>Sign in</Button>
                    <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in with
                        Google</Button>
                </ButtonsRow>
            </div>
            <div>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <TextField id="standard-basic" label="Display name" name='displayName' onBlur={handleBlur} onInput={handleInput}
                           error={formatErrStatus('displayName')} helperText={formatHelperText('displayName')}/>
                <TextField id="standard-basic" label="Email" name='signUpEmail' onBlur={handleBlur} onInput={handleInput}
                           error={formatErrStatus('signUpEmail')} helperText={formatHelperText('signUpEmail')}/>
                <FormControl>
                    <InputLabel htmlFor="signUpPassword-adornment-password">Password</InputLabel>
                    <Input id="signUpPassword-basic" label="password" name='signUpPassword'
                           onBlur={handleBlur} onInput={handleInput}
                           aria-describedby="signUpPassword-helper-text"
                           error={formatErrStatus('signUpPassword')}
                           type={showSignUpPassword ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword(setShowSignUpPassword, showSignUpPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showSignUpPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }/>
                    <FormHelperText id="signUpPassword-helper-text" error>{formatHelperText('signUpPassword')}</FormHelperText>

                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="signUpConfirmPassword-adornment-password">Confirm password</InputLabel>
                    <Input id="signUpConfirmPassword-basic" label="password" name='signUpConfirmPassword'
                           onBlur={handleBlur} onInput={handleInput}
                           aria-describedby="signUpConfirmPassword-helper-text"
                           error={formatErrStatus('signUpConfirmPassword')}
                           type={showSignUpConfirmPassword ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword(setShowSignUpConfirmPassword, showSignUpConfirmPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showSignUpConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }/>
                    <FormHelperText id="signUpConfirmPassword-helper-text" error>{formatHelperText('signUpConfirmPassword')}</FormHelperText>

                </FormControl>
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