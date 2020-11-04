import React, {useState} from 'react';
import {FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function InputWithAdornmentComponent(props) {
    const propsToPass = {...props};
    delete propsToPass.helperText;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const toggleVisible = () => setPasswordVisible(!passwordVisible);
    const handleMouseDownPassword = (event) => event.preventDefault();
    return (
        <FormControl>
            <InputLabel htmlFor={`${props.name}-adornment-password`}>Password</InputLabel>
            <Input {...propsToPass} type={passwordVisible?'text':'password'} endAdornment={
                <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={toggleVisible} onMouseDown={handleMouseDownPassword}>
                        {passwordVisible ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            }/>
            <FormHelperText id={`${props.name}-helper-text`} error={props.error}>{props.helperText}</FormHelperText>
        </FormControl>
    );
}

export default InputWithAdornmentComponent;