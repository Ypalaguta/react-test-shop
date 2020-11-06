import styled from 'styled-components';

export const ItemsWrap = styled.div`
    max-width: 800px;
    margin: auto;
`;

export const ItemRow = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    margin-bottom: 30px;
    &>div {
    text-align: center;
    }
`;

export const ItemPic = styled.div`
    width: 200px;
    height: 200px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-position: center center;
    background-size: cover;  
`;

export const AddBlock = styled.div`
    display: inline-block;
    align-self: center;
    cursor: pointer;
`;
export const RemoveOneBlock = styled.div`
    display: inline-block;
    cursor: pointer;
`;

export const RemoveBlock = styled.div`
    cursor: pointer;
`;