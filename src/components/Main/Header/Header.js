import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderTitleContainer } from './styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <FontAwesomeIcon icon={faHashtag} className="fontawesome__headerTitle"/>
                <HeaderTitle>general-chat</HeaderTitle>
            </HeaderTitleContainer>
        </HeaderContainer>
    )
}
