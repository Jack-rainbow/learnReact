import {
    axios
} from 'react';
import cookie from 'js-cookie'
import {SET_USER_INFO} from '../../constants'
const baseUrl = '/api/v1'


export const setCurrentUser =(user)=> {
    return {
        type: SET_USER_INFO,
        data: user
    }
}
// * 用户注册
export const userSignUp= (userData) => {
    return dispatch=>{
        return axios.post(`${baseUrl}/registry`, userData)
    }
}
// * 用户注册
export const userLogin= (userData) => {
    return dispatch=>{
        return axios.post(`${baseUrl}/login`, userData)
        .then((res)=>{
            const data = res.data
            cookie.set('token', data.token)
            dispatch(setCurrentUser(data))
            return Promise.resolve(res)
        })
    }
}

// * 清空数据
export const logout = () =>{
    return dispatch=>{
        // 清除token
        cookie.remove('token', { path: '' });
        //清楚redux数据
        dispatch(setCurrentUser({}))
    }
}