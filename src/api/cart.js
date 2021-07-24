import request from '@/utils/request'

export function list() {
  return request({
    url: '/cart',
    method: 'get'
  })
}

export function add (data) {
  return request({
    url: '/cart',
    method: 'post',
    data
  })
}

export function update (data) {
  return request({
    url: '/cart',
    method: 'put',
    data
  })
}

export function remove (ids) {
  return request({
    url: '/cart',
    method: 'delete',
    data: ids
  })
}
