import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faSkype, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ContactsContainer } from './contacts.style';

function ContactsPage(props) {
    return (
        <ContactsContainer>
            <div><a href="mailto:ypalaguta@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> ypalaguta@gmail.com</a></div>
            <div><a href="tel:+380994372384"><FontAwesomeIcon icon={faPhoneAlt} /> +380994372384</a></div>
            <div><a href="skype:MimkiOsn"><FontAwesomeIcon icon={faSkype} /> MimkiOsn</a></div>
            <div><a href='https://github.com/Ypalaguta'><FontAwesomeIcon icon={faGithub} /> https://github.com/Ypalaguta</a></div>
        </ContactsContainer>
    );
}

export default ContactsPage;