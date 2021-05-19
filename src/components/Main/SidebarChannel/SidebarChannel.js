import React from 'react'
import { NameChannel, SidebarChannelContainer, SidebarChannelHeader } from './styles'

export const SidebarChannel = () => {
    return (
        <SidebarChannelContainer>
            <SidebarChannelHeader>
                <NameChannel>Frontend's Devs</NameChannel>
            </SidebarChannelHeader>
        </SidebarChannelContainer>
    )
}
