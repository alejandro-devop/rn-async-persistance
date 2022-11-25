import getStoreReducer from './store.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    store: getStoreReducer()
})
