import axios from 'axios';
import qs from 'qs';
import { MessageBox } from 'element-ui';
import router from '../router/index';
import Cookies from 'js-cookie';

const env = process.env.NODE_ENV; // 判断是生产环境还是开发环境
// let baseURL = env === 'development' ? '/api' : 'http://api.songtang.xyz:3902';
let baseURL = env === 'development' ? '/api' : 'https://songtang.xyz/nelm';
console.log(baseURL);

const instance = axios.create({
    baseURL,
    timeout: 2000,
});

// 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------
instance.interceptors.request.use(function (config) {
    config.headers.captcha = Cookies.get('cap');
    config.headers.authorization =  Cookies.get("adminToken");// 判断是否存在token，如果存在的话，则每个http header都加上token
    return config;
}, function (error) {
    // 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
});

// 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
    // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
    const res = response.data;
    if (res.status === 401) {
        MessageBox.confirm(
            '登陆状态已失效，请重新登陆！',
            '提示',
            {confirmButtonText: '重新登录', type: 'info', center: true, showClose: false, showCancelButton: false}
        ).then(() => {
            Cookies.remove('adminToken');
            Cookies.remove('sidebarStatus');
            sessionStorage.removeItem('vuex');
            router.push('/login')
        })
    }
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});

// 封装数据返回失败提示函数---------------------------------------------------------------------------
// function errorState (response) {
//     // 隐藏loading
//     // 如果http状态码正常，则直接返回数据
//     if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
//         // 如果不需要除了data之外的数据，可以直接 return response.data
//         return response
//     } else {
//         alert('数据获取错误')
//     }
// }

// 封装数据返回成功提示函数---------------------------------------------------------------------------
// function successState (res) {
//     // 隐藏loading
//     // 统一判断后端返回的错误码(错误码与后台协商而定)
//     if (res.status === 200) {
//         return res.data
//     }
// }

// 封装axios--------------------------------------------------------------------------------------
function $axios (url, params, method) {
    method = method && method.toUpperCase();
    let httpDefault = {
        method: method || 'GET',
        withCredentials:true,
        // baseURL: baseURL,
        url: url,
        // `params` 是即将与请求一起发送的 URL 参数
        // `data` 是作为请求主体被发送的数据
        params: method === 'GET' || method === 'DELETE' ? params : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        timeout: 10000
    };
    // 注意**Promise**使用(Promise首字母大写)
    return new Promise((resolve, reject) => {
        // 此处的.then属于axios
        instance(httpDefault)
            .then(res => {
                // successState(res);
                resolve(res)
            }).catch((response) => {
            // errorState(response);
            reject(response)
        })
    })
}

export default $axios;
