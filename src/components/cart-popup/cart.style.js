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

export const CartItemsWrap = styled.div`
    overflow: hidden;
    height: 326px;
`;

export const CartItem = styled.div`
    display: flex;
    padding:2px;
`;

export const CartItemDesc = styled.div`
    
`;

export const CartItemPic = styled.div`
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    background-size: cover;
    background-position: center center;
    width: 63px;
    height: 65px;
    margin-right: 16px;
`;

export const AddBlock = styled.div`
    display: inline-block;
    align-self: center;
    cursor: pointer;
`;

export const RemoveOneBlock = styled.div`
    display: inline-block;
    align-self: center;
    cursor: pointer;
`;

export const RemoveBlock = styled.div`
    display: flex;
    align-self: center;
    margin-left: auto;
    cursor: pointer;
`;