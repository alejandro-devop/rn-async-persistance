import React from 'react'
import Wrapper from './Wrapper'
import Debugger from './debugger'
import { SessionContextProvider } from './Context'
import usePrevProps from '../hooks/usePrevProps'
import _ from 'lodash'
import { SessionProviderProps } from '../types/SessionProvider.type'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoadingScreen from './loading-screen'

/**
 * Component to wrapp the session logic and pass it to the whole appliation
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param param0
 * @returns
 */
const SessionProvider: React.FC<SessionProviderProps> = ({ children, debug }) => {
    const [store, setStore] = React.useState({})
    const [rehydrated, setRehydrated] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    // const [storeActions, setStoreActions] = React.useState([])
    /**
     * This queue stores the actions to be executed by the session on the next frame
     */
    const queue = React.useRef<{ type: 'key' | 'all' | 'clear'; payload: any }[]>([])
    /**
     * Saving the previews store state help us to track the changes on the current frame
     */
    const prevProps = usePrevProps({ store, queue: queue.current })
    /**
     * A flag to lock the queue process
     */
    const processing = React.useRef<boolean>(false)
    /**
     * Function to update the state key by key
     */
    const setKey = React.useCallback(
        (key: string, value: any) => {
            queue.current.push({ type: 'key', payload: { key, value } })
            if (!processing.current) {
                processing.current = true
                processQueue()
            }
        },
        [store]
    )
    /**
     * Function to trigger the session clearing
     */
    const clear = React.useCallback(() => {
        queue.current.push({ type: 'clear', payload: {} })
        if (!processing.current) {
            processing.current = true
            processQueue()
        }
    }, [store])
    /**
     * Function to process the queue of changes
     */
    const processQueue = React.useCallback(async () => {
        const queueSize = queue.current.length
        /* If there's a clearing action all the changes previous registered must be deleted */
        let cleared = false
        if (queueSize > 0) {
            const storeToPersist = queue.current.reduce(
                (newStore, currentItem) => {
                    if (currentItem.type === 'key') {
                        const { payload } = currentItem
                        newStore[payload.key] = payload.value
                    }
                    if (currentItem.type === 'all') {
                        const { payload } = currentItem
                        console.log('Processing... all', payload)
                        newStore = { ...newStore, ...payload }
                    }
                    if (currentItem.type === 'clear') {
                        newStore = {}
                        cleared = true
                    }
                    return newStore
                },
                { ...store }
            )
            /* Once the queue is processded it must be clear it */
            queue.current = []
            if (!cleared && _.isEqual(prevProps.store, storeToPersist)) {
                console.log('======= No changes ======')
            } else {
                let previewStore = {}
                try {
                    const storedStore = await AsyncStorage.getItem('@store')
                    const parsedStore = JSON.parse(storedStore || '{}')
                    previewStore = parsedStore
                } catch {
                    previewStore = { ...store }
                }
                const newStore = cleared
                    ? storeToPersist
                    : { ...previewStore, ...store, ...storeToPersist }
                setStore(newStore)
                persistInStore(newStore)
            }
        }
        processing.current = false
    }, [store, queue.current, prevProps.store, processing.current])
    /**
     * Function to persist the store to the device async storage.
     */
    const persistInStore = React.useCallback(
        async (newStore: any) => {
            try {
                await AsyncStorage.setItem('@store', JSON.stringify(newStore))
            } catch {}
        },
        [store]
    )
    /**
     * Function to fetch the current saved data from the local storage.
     */
    const rehydrate = React.useCallback(async () => {
        try {
            const storedStore = await AsyncStorage.getItem('@store')
            const parsedStore = JSON.parse(storedStore || '{}')
            setStore(parsedStore)
            setRehydrated(true)
        } catch {
            setStore({})
        } finally {
            setLoaded(true)
        }
    }, [])

    React.useEffect(() => {
        if (!rehydrated) {
            rehydrate()
        }
    }, [queue.current, store, rehydrated])

    const setAllKeys = React.useCallback(
        (keys: { [key: string]: any }) => {
            queue.current.push({ type: 'all', payload: keys })
            if (!processing.current) {
                processing.current = true
                processQueue()
            }
        },
        [store]
    )
    const removeKey = () => {}
    return (
        <Wrapper>
            <SessionContextProvider
                value={{
                    store,
                    setKey,
                    setAllKeys,
                    removeKey,
                    clear,
                    debug
                }}
            >
                {loaded ? children : <LoadingScreen />}
                {debug && <Debugger />}
            </SessionContextProvider>
        </Wrapper>
    )
}

export default SessionProvider
