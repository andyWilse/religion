import request from '@/service/api/index'
// 获取
export function ParanmHome() {
  return request({
    url: '/event/undoEvents',
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