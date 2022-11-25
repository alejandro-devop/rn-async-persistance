import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SessionContextProvider } from './context'
import * as actions from './actions/store.actions'

const SessionDriver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const store = useSelector((state: any) => state.store)
    const dispatch = useDispatch()
    const handleSetKey = async (key: string, value: any) => {
        dispatch(actions.setKey(key, value))
    }
    const handleRemoveKey = () => {}
    const handleSetAllKeys = (keys: any) => {
        dispatch(actions.setAll(keys))
    }
    const handleClear = () => {}

    return (
        <SessionContextProvider
            value={{
                store,
                setKey: handleSetKey,
                setAllKeys: handleSetAllKeys,
                removeKey: handleRemoveKey,
                clear: handleClear,
                debug: false
            }}
        >
            {children}
        </SessionContextProvider>
    )
}

export default SessionDriver
