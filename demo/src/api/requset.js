import axios from 'axios'
import config from '../config'
import {ElMessage} from 'element-plus'
const NETWORK_ERROR = '网络请求异常，请稍后再试'
// 创建axios实例对象
const service = axios.create({
    baseURL:config.baseApi
})
service.interceptors.request.use((req) => {
    return req
})
service.interceptors.response.use((res) => {
    const {code,data,msg} = res.data
    if(code == 200) {
        return data
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})
function requset(e) {
    e.method = e.method || 'get'
    if (e.method.toLowerCase() == 'get') {
        e.params = e.data
    }
    let isMock = config.mock
    if(typeof e.mock !== 'undefined') {
        isMock = e.mock
    }
    if(config.env == 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(e)
}
export default requset