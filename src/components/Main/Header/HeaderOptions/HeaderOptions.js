import { faBell, faInbox, faQuestionCircle, faRandom, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderOptionsContainer } from './styles'

export const HeaderOptions = () => {
    return (
        <HeaderOptionsContainer>
            <FontAwesomeIcon icon={faBell} className="fontawesome__HeaderOptions" />
            <FontAwesomeIcon icon={faUserFriends} className="fontawesome__HeaderOptions"/>
            <FontAwesomeIcon icon={faRandom} className="fontawesome__HeaderOptions"/>
            <FontAwesomeIcon icon={faInbox} className="fontawesome__HeaderOptions"/>
            <FontAwesomeIcon icon={faQuestionCircle} className="fontawesome__HeaderOptions"/>
        </HeaderOptionsContainer>
    )
}
