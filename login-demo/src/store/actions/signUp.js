import {
    axios
} from 'react';

const baseUrl = '/api/v1'


// * 用户注册
export const userSignUp= (userData) => {
    return dispatch=>{
        return axios.post(`${baseUrl}/registry`, userData)
    }
}