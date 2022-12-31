import axios from "axios";
const service = axios.create({
  baseURL: "https://restapi.amap.com/v3/",
  timeout: 3000
})
// const serve = axios.create({
//   baseURL: 'https://uri.amap.com',
//   timeout: 3000
// })
export default service
