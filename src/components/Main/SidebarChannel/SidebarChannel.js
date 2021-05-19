import React from 'react'
import { NameChannel, SidebarChannelContainer, SidebarChannelHeader } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const SidebarChannel = () => {
    return (
        <SidebarChannelContainer>
            <SidebarChannelHeader>
                <NameChannel>Frontend's Devs</NameChannel>
                <FontAwesomeIcon icon={faChevronDown} className='fontawesome__icon'/>
            </SidebarChannelHeader>
        </SidebarChannelContainer>
    )
}
