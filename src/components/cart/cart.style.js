import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CartContainer = styled.div`
    border: 1px solid #ff00001a;
    width: 266px;
    height: 390px;
    position: absolute;
    right: 40px;
    top: 79px;
    z-index: 999;
    background-color: rgb(255 255 255 / 82%);
    padding: 7px;
`;

export const ButtonLink = styled(Link)`
    display: flex;
    width: 266px;
    left: 0px;
    place-content: center;
    position: absolute;
    bottom: 10px;
`;