import styled from 'styled-components';

export const CategoryPicture = styled.div`
    width: 200px;
    height: 200px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-position: center center;
    background-size: cover;
        @media screen and (max-width:800px) {
        margin: 0px;
        width: 150px;
        height: 150px;
    }
`;

export const CategoryContainer = styled.div`
    width:200px;
    float: left;
    margin-right: 30px;
    margin-top: 30px;
    &:hover>.addToCart {
        opacity: 1;
    }
    @media screen and (max-width:800px) {
        margin: 13px;
        width: 150px;
    }
`;

export const PriceRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AddToCart = styled.div`
    position: absolute;
    opacity: 0;
    background: #ffffffbf;
    padding: 10px;
    cursor: pointer;
    margin-left: 43px;
    margin-top: 78px;
    @media screen and (max-width:800px) {
        margin-left: 25px;
        margin-top: 52px;
    }
`;