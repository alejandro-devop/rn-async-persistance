import { StoreActionType } from '../types'

export const setKey: StoreActionType = (key: string, data: any) => ({
    type: '@store/set-key',
    payload: {
        key,
        data
    }
})

export const setAll: StoreActionType = (keys: any) => ({
    type: '@store/set-all',
    payload: keys
})

export const removeKey: StoreActionType = (key: string) => ({
    type: '@store/del-key',
    payload: {
        key
    }
})
