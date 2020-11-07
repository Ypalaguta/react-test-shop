import styled from 'styled-components';

export const ContactsContainer = styled.div`
    width: 600px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
        padding: 5px;
    }
    svg {
        margin-right:10px;
    }
    div:last-child a {
        text-decoration: underline;
    }
    @media screen and (max-width:800px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 15px;
    }
`;