import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const categoriesBasis = `
    margin: 0px 5px;
    overflow: hidden;
    min-width: 30%;
    padding: 5px;
    span {
        background: white;
        padding: 1px 9px;
        opacity: 0.6;
    }
    &:hover .bg {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    &:hover span {
        opacity: 0.9;
    }
    position: relative;
`;

const MediumCategory = `
    ${categoriesBasis}
    height: 240px;
    border: 1px solid black;
    flex: auto;
`;

const LargeCategory = `
    ${categoriesBasis}
    height: 380px;
    border: 1px solid black;
    flex: 1 1 auto;
    margin-top: 9px;
`;

export const OverallsBlock = styled(Link)`
    ${MediumCategory}
    .bg{
        background-image: url('/tempImages/overall.jpg');
        background-position: 0px -35px;
    }
`;
export const SocksBlock = styled(Link)`
    ${MediumCategory}
    .bg{
        background-image: url('/tempImages/socks.jpg');
    }
`;
export const HatsBlock = styled(Link)`
    ${MediumCategory}
    .bg{
        background-image: url('/tempImages/hats.jpg');
        background-position: center;
    }
`;
export const DogsBlock = styled(Link)`
    ${LargeCategory}
    .bg{
        background-image: url('/tempImages/dog-1.jpg');
    }
`;
export const CatsBlock = styled(Link)`
    ${LargeCategory}
    .bg{
        background-image: url('/tempImages/cat-1.jpg');
    }
`;
export const Bg = styled.div.attrs({
    className: 'bg'
})`
    position:absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: -5px;
`;
