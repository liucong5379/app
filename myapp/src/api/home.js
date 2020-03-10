import request from './index'

/**
 * 封装首页轮播图的请求
 */
export function getBannerList (params) {
  const { url } = params

  return request({
    url,
    method: 'GET'
  })
}

/**
 * 封装首页列表的请求
 */
export function getProlist (params) {
  const { url, data } = params
  // return request({
  //   url,
  //   data:
  //   method: 'GET'
  // })

  return request.get(url, {
    params: data || {}
  })
}
