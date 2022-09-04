import { useContext } from 'react'
import { SessionContext } from '../session-provider/Context'

const useSession = () => {
    const { store, clear, removeKey, setAllKeys, setKey } = useContext(SessionContext)
    return { store, clear, removeKey, setAllKeys, setKey }
}

export default useSession
