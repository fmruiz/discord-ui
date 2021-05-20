import React from 'react'
import { Header } from './Header/Header'
import { SidebarChannel } from './SidebarChannel/SidebarChannel'
import { DashboardContainer, MainContainer } from './styles'

export const Main = () => {
    return (
        <MainContainer>
            <SidebarChannel />
            <DashboardContainer>
                <Header />
            </DashboardContainer>
        </MainContainer>
    )
}
