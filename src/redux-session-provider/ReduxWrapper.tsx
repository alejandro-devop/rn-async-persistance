import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import getReducer from './reducers/store.reducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ReduxWrapper: React.FC<{ children: React.ReactNode; initialState?: any }> = ({
    children,
    initialState
}) => {
    const store = configureStore({ reducer: combineReducers({ store: getReducer(initialState) }) })
    let timesControl: any = null
    const onStateChanged = React.useCallback(async () => {
        const newStore = store.getState()
        try {
            console.log('Updating the state.')
            AsyncStorage.setItem('@store', JSON.stringify(newStore?.store))
        } catch {}
    }, [store])

    store.subscribe(async () => {
        clearTimeout(timesControl)
        timesControl = setTimeout(() => {
            onStateChanged()
        }, 200)
    })
    React.useEffect(() => {
        return () => {
            clearTimeout(timesControl)
        }
    }, [timesControl])
    return <Provider store={store}>{children}</Provider>
}

ReduxWrapper.defaultProps = {
    initialState: {
        logged: false
    }
}

export default ReduxWrapper
