import service from "../util/service.js"
// 封装相关的数据请求

let link=(url,method="get",data,params)=>{
    // 使用service.request方法，发送一个http请求
    return new Promise((resolve,reject)=>{
        service.request({
            url,
            method,
            data,
            params
        }).then((ok)=>{
            // 若成功，在成功的回调函数中调用resolve()，返回一个成功的Promise对象，成功结果和上一个请求成功结果相同
            resolve(ok)
        }).catch((err)=>{
            // 若失败，在失败的回调函数中调用reject()，返回一个失败的Promise对象，失败错误和上一个请求失败错误相同
            reject(err)
        })
    })
}

export default link