import React from 'react'
import { UsersConectedContainer, UsersConectedTitle, UsersContainer } from './styles'

export const UsersConected = () => {
    return (
        <UsersConectedContainer>
            <UsersContainer>
                <UsersConectedTitle>ONLINE - 0</UsersConectedTitle>
            </UsersContainer>
            <UsersContainer>
                <UsersConectedTitle>OFFLINE - 0</UsersConectedTitle>
            </UsersContainer>
        </UsersConectedContainer>
    )
}
