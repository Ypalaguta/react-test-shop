import { React, useState } from 'react';
import { TextField, InputAdornment, IconButton, Input, FormControl, InputLabel, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { AuthContainer, ButtonsRow } from './auth.styles'

function AuthPage(props) {
    const [showSignInPassword, setShowSignInPassword] = useState(false);
    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
    const handleClickShowPassword = (setter, field) => () => setter(!field);
    const handleMouseDownPassword = (event) => event.preventDefault();
    return (
        <AuthContainer>
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <TextField id="standard-basic" label="Email" name='signInEmail' />
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input id="standard-basic" label="password" name='signInPassword' type={showSignInPassword ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword(setShowSignInPassword, showSignInPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showSignInPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    } />
                </FormControl >
                <ButtonsRow>
                    <Button color="primary">Sign in</Button>
                    <Button variant="contained" color="primary">Sign in with Google</Button>
                </ButtonsRow>
            </div>
            <div>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <TextField id="standard-basic" label="Display name" name='displayName' />
                <TextField id="standard-basic" label="Email" name='signUpEmail' />
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input id="standard-basic" label="password" name='signUpPassword' type={showSignUpPassword ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword(setShowSignUpPassword, showSignUpPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showSignUpPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    } />
                </FormControl >
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Confirm password</InputLabel>
                    <Input id="standard-basic" label="password" name='signUpConfirmPassword' type={showSignUpConfirmPassword ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword(setShowSignUpConfirmPassword, showSignUpConfirmPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showSignUpConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    } />
                </FormControl >
                <ButtonsRow>
                    <Button color="primary">Sign up</Button>
                    <Button variant="contained" color="primary">Sign up with Google</Button>
                </ButtonsRow>
            </div>
        </AuthContainer>
    );
}

export default AuthPage;