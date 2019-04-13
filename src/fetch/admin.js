import axios from 'axios';
import qs from 'qs';

const request = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

request.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config;
})

request.interceptors.response.use(response => {
    return response.data;
})


// 管理员登陆
export const adminLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        request({
            url: '/adminLogin',
            method: 'post',
            data: {
                user: username,
                pwd: password
            }
        }).then(res => {
            resolve(res);
        })
    })
}

// 添加书籍基本信息
export const addbookmes = (name,
    author,
    images,
    ratings,
    wordcount,
    type,
    serialize,
    like,
    intro) => {
    return new Promise((resolve, reject) => {
        request({
            url: '/addbookbasemess',
            method: 'post',
            data: {
                name,
                author,
                images,
                ratings,
                wordcount,
                type,
                serialize,
                like,
                intro
            }
        }).then(res => {
            resolve(res);
        })
    })
}
// 获取用户列表
export const adminuserlist = () => {
    return new Promise((resolve, reject) => {
        request({
            url: '/userlist',
            method: 'get'
        }).then(res => {
            resolve(res);
        })
    })
}