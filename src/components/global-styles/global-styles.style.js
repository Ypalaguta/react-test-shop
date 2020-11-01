import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 21px;
        padding: 20px 40px;
        @media screen and (max-width:800px) {
            padding: 10px;
        }
        a {
            text-decoration: none;
            color: black;
        }
        * {
            box-sizing: border-box;
        }
    }
`;