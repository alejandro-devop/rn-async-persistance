import { configureStore } from '@reduxjs/toolkit'
import storeReducers from './reducers'

const store = configureStore({ reducer: storeReducers })

export default store
