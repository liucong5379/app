import request from './index'

export function addCart (params) {
  const { url, data } = params
  return request.post(url, data)
}
