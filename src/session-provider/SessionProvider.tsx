import React from 'react'
import { store } from '../redux/store'
import { Provider as ReduxProvider } from 'react-redux'

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default SessionProvider
