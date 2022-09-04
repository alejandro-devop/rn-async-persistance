import React from 'react'
import Wrapper from './Wrapper'
import Debugger from './debugger'
import { SessionContextProvider } from './Context'
import usePrevProps from '../hooks/usePrevProps'
import _ from 'lodash'

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [store, setStore] = React.useState({})
    // const [locked, setLocked] = React.useState(false)
    const queue = React.useRef<{ type: 'key' | 'all'; payload: any }[]>([])
    const prevProps = usePrevProps({ store, queue: queue.current })
    const processing = React.useRef<boolean>(false)
    const setKey = (key: string, value: any) => {
        queue.current.push({ type: 'key', payload: { key, value } })
        if (!processing.current) {
            processing.current = true
            processQueue()
        }
    }

    const processQueue = React.useCallback(() => {
        const queueSize = queue.current.length
        if (queueSize > 0) {
            const storeToPersist = queue.current.reduce((newStore, currentItem) => {
                if (currentItem.type === 'key') {
                    const { payload } = currentItem
                    newStore[payload.key] = payload.value
                }
                return newStore
            }, store)
            queue.current = []
            if (_.isEqual(prevProps.store, store)) {
            } else {
                setStore({ ...store, ...storeToPersist })
            }
        }
        processing.current = false
    }, [store, queue.current, prevProps.store, processing.current])

    React.useEffect(() => {
        processQueue()
    }, [queue.current, store])

    const setAllKeys = () => {}
    const removeKey = () => {}
    const clear = () => {}

    return (
        <Wrapper>
            <SessionContextProvider
                value={{
                    store,
                    setKey,
                    setAllKeys,
                    removeKey,
                    clear
                }}
            >
                {children}
                <Debugger />
            </SessionContextProvider>
        </Wrapper>
    )
}

export default SessionProvider
