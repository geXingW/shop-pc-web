import request from '@/utils/request'

export function info(id) {
  return request({
    url: '/product/' + id,
    method: 'get'
  })
}

