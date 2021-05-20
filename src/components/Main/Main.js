import React from 'react'
import { ChannelChat } from './ChannelChat/ChannelChat'
import { Header } from './Header/Header'
import { SidebarChannel } from './SidebarChannel/SidebarChannel'
import { ChatContainer, DashboardContainer, MainContainer } from './styles'
import { UsersConected } from './UsersConected/UsersConected'

export const Main = () => {
    return (
        <MainContainer>
            <SidebarChannel />
            <DashboardContainer>
                <Header />
                <ChatContainer>
                    <ChannelChat />
                    <UsersConected />
                </ChatContainer>
            </DashboardContainer>
        </MainContainer>
    )
}
