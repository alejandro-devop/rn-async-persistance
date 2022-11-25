import React from 'react'
import ReduxWrapper from './ReduxWrapper'
import Debugger from './debugger'
import SessionDriver from './SessionDriver'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Loads async storage and data and initializes the redux store
 * @param param0
 * @returns
 */
const ReduxSessionProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    //Load the session from the async storage
    const [persistedData, setPersistedData] = React.useState({})
    const [loaded, setLoaded] = React.useState(false)

    const getData = React.useCallback(async () => {
        const storedStore = await AsyncStorage.getItem('@store')
        const parsedStore = JSON.parse(storedStore || '{}')
        setPersistedData(parsedStore)
        setLoaded(true)
    }, [setPersistedData])

    React.useEffect(() => {
        if (!loaded) {
            getData()
        }
    }, [loaded])

    if (!loaded) {
        return <></>
    }
    return (
        <ReduxWrapper initialState={persistedData}>
            <SessionDriver>
                {children}
                <Debugger />
            </SessionDriver>
        </ReduxWrapper>
    )
}

export default ReduxSessionProvider
