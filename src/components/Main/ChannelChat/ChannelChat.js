import React from 'react'
import { ChannelChatContainer } from './styles'
import { WelcomeChannel } from './WelcomeChannel/WelcomeChannel'

export const ChannelChat = () => {
    return (
        <ChannelChatContainer>
            <WelcomeChannel />
        </ChannelChatContainer>
    )
}
