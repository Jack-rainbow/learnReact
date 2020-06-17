import {combineReducers} from 'redux';
import {auth} from './auth'

const rootStore = combineReducers({
    auth
})
export default rootStore