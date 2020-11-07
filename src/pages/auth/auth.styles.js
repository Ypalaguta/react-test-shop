import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    width: 820px;
    margin: auto;
    place-content: space-between;
    &>div>h2 {
        margin-bottom:0px;
    }
    &>div {
        width:310px;
            @media screen and (max-width:800px) {
        width:100%
    }
    }
    &>div>span {
        font-size: 18px;
    }
    &>div>span+.MuiFormControl-root {
        margin-top:20px;
    }
    &>div>.MuiFormControl-root {
        width:100%;
        margin-top:8px;
    }
    @media screen and (max-width:800px) {
        padding:15px;
        width:100%;
        flex-wrap:wrap;
    }
`;
export const ButtonsRow = styled.div`
    display: flex;
    margin-top: 31px;
    justify-content: space-between;
`;
export const HiddenWrap = styled.div`
    @media screen and (max-width:800px) {
        display: ${({hiddenBlock})=>hiddenBlock?'none':'block'};
    }
`;
export const HiderBlock = styled.div`
    margin-top: 16px;
    color: #0084ab;
    font-weight: bold;
    font-size: 19px;
    text-align: right;
    display:none;
    @media screen and (max-width:800px) {
        display: ${({hiddenBlock})=>hiddenBlock?'none':'block'};
    }
`;