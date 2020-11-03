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
`;