import React from 'react';
import {LdsRing, SpinnerWrap} from "./loader.styles";

function Loader(props) {
    const {marginTop, borderColor='#000'} = props;
    return (
        <SpinnerWrap marginTop={marginTop}>
            <LdsRing borderColor={borderColor}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LdsRing>
        </SpinnerWrap>
    );
}

export default Loader;