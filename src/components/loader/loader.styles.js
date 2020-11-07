import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LdsRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${({borderColor})=>borderColor};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({borderColor})=>borderColor} transparent transparent transparent;
    }
    & div:nth-child(1){
        animation-delay: -0.45s;
        border-color: #bb2929 transparent transparent transparent;
    }
    & div:nth-child(2){
        animation-delay: -0.3s;
    }
    & div:nth-child(3){
        animation-delay: -0.15s;
        border-color: #ffffff6b transparent transparent transparent;
    }
`;

export const SpinnerWrap = styled.div`
    margin-top: ${({marginTop})=>marginTop?marginTop:'auto'};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;