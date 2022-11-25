import { useContext } from 'react'
// import { SessionContext } from '../session-provider/Context'
import { SessionContext } from '../redux-session-provider/context'

const useSession = () => {
    const { store, clear, removeKey, setAllKeys, setKey } = useContext(SessionContext) as any
    return { store, clear, removeKey, setAllKeys, setKey }
}

export default useSession
