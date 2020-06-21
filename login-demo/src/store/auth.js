import {SET_USER_INFO, RESET_USER_INFO} from '../constants'

//初始数据
const initState = {
    isAuthenticated: false,
    userInfo: {}
}

export function auth(state = initState, action) {
    switch(action.type) {
        // 当有用户信息的时候不再写入
        case SET_USER_INFO: 
            return{
                isAuthenticated: Object.keys(action.data).length ? true: false,
                userInfo: action.data
            }
        case RESET_USER_INFO:
            return  initState
        default:
            return state;
    }
}