import request from '@/utils/request'

export function list() {
  return request({
    url: '/recv-address',
    method: 'get'
  })
}

export function add (data) {
  return request({
    url: '/recv-address',
    method: 'post',
    data
  })
}

export function update (data) {
  return request({
    url: '/recv-address',
    method: 'put',
    data
  })
}

export function remove (ids) {
  return request({
    url: '/recv-address',
    method: 'delete',
    data: ids
  })
}
