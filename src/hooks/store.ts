import { useSelector } from 'react-redux'

export const useSession = <SessionType extends object = {}>() => {
    const store = useSelector((state: { store: SessionType }) => state.store)
    return store
}
export const setKey = (key: string, value: any) => {
    console.log('key: ', key, value)
}
export const setAllKeys = (keys: { [k: string]: any }) => {
    console.log('key: ', keys)
}
export const removeKey = (key: string) => {
    console.log('key: ', key)
}
export const clearSession = () => {}
