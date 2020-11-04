import styles from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled.div`
    height:70px;
    margin-bottom:10px;
    display: flex;
    justify-content: flex-end;
`;

export const HeaderIconWrap = styled.div`
    flex: auto;
`;

const linkBase = `
    margin-left:10px;
    margin-top:20px;
    height:30px;
    :hover {
        /*text-decoration: underline;*/
        /*background: linear-gradient(270deg,hsl(0 100% 50% / 0.5) 16.66%,rgb(253 140 0 / 0.5) 16.66%,33.32%,rgb(255 229 0 / 0.5) 33.32%,49.98%,rgb(17 159 11 / 0.5) 49.98%,66.64%,rgb(6 68 179 / 0.5) 66.64%,83.3%,rgb(194 46 220 / 0.5) 83.3%);*/
        font-weight: bold;
    }
`;

export const HeaderLink = styled(Link)`
    ${linkBase}
`;

export const LinkLike = styled.div`
    ${linkBase}
    cursor: pointer;
`;