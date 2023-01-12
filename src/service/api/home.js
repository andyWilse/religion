import request from '@/service/api/index'
// 获取
export function Paranme() {
  return request({
    url: '/event/allEvent',
    method: 'post',
  })
}

// 高德地图search
// export function Search() {
//   return request({
//     url: '/search',
//   })
// }

/***
 * 
 * 
 * 
 */