import { StoreKeyType } from '../types'

type ActionType = {
    type: StoreKeyType
    payload: {
        key: string
        data?: any
    }
}

export default (initialState?: any) =>
    (state: any = initialState, action: ActionType) => {
        const { type, payload } = action
        const { key, data } = payload || {}
        switch (type) {
            case '@store/set-key':
                return { ...state, [key]: data }
            case '@store/del-key':
                return { ...state, [key]: null }
            case '@store/set-all':
                return { ...state, ...payload }
            default:
                return state
        }
    }
