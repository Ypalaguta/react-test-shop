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
`;
export const ButtonsRow = styled.div`
    display: flex;
    margin-top: 31px;
    justify-content: space-between;
`;