import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}
type PayloadType = { key: string; value: any } | { [k: string]: any }

const storeSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setKey: (state, action: PayloadAction<PayloadType>) => {
            const { key, value } = action.payload
            state[key] = value
        },
        setAllKeys: (state, action: PayloadAction<PayloadType>) => {
            state = { ...state, ...action.payload }
        },
        delKey: (state, action: PayloadAction<PayloadType>) => {
            const { key } = action.payload
            if (state[key]) {
                state[key] = null
            }
            return state
        },
        clear: (state, action: PayloadAction<PayloadType>) => {
            if (action.payload) {
                state = action.payload
            } else {
                state = initialState
            }
            return state
        }
    }
})

export const { clear, delKey, setAllKeys, setKey } = storeSlice.actions
export default storeSlice.reducer
