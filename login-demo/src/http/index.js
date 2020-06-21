import axios from 'axios';
import cookie from 'js-cookie'

//取消请求
axios.create({
    baseURL: '/',
    timeout: 15000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
})

//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
    const token = cookie.get('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
},(error)=> {
    return Promise.reject(error)
}
)
// respone拦截器
axios.interceptors.response.use(
        response => {
           return response.data;
        },
        error => {
            return Promise.reject(error)
        }
)

export default axios;