import axios from "axios";
const service = axios.create({
  baseURL: "http://192.168.110.179:8092/religion/zhiyun",
  timeout: 3000,

})
/** 添加请求拦截器
 *  
 * *
 * 
 * */
// service.interceptors.request.use(config => {
//   if (localStorage.getItem('token') == null) {
//   } else {
//     // config.headers['token'] = localStorage.getItem('token')
//   }
//   return config
// },
//   error => {
//     Message.error("操作失败！")
//     return Promise.reject(error);
//   }
// )
// /** 添加响应拦截器**/
// service.interceptors.response.use(response => {
//   if (response.status === 200 && response.data.data.code === 300) {
//     Message.error(response.data.msg)
//   } else {
//     return Promise.response(response)
//   }
// },
//   error => {
//     Message.error("操作失败！")
//     return Promise.response(error)
//   }
// )
export default service
