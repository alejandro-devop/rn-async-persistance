import React from 'react'
import { SessionContextType } from '../types/SessionContext'
export const SessionContext = React.createContext<SessionContextType>({
    store: {},
    setKey: () => null,
    setAllKeys: () => null,
    removeKey: () => null,
    clear: () => null
})
export const SessionContextProvider = SessionContext.Provider
export const SessionContextConsumer = SessionContext.Consumer
