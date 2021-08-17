import request from '@/utils/request'

export function list() {
  return request({
    url: '/order',
    method: 'get'
  })
}

export function detail(id) {
  return request({
    url: '/order/' + id,
    method: 'get'
  })
}

export function submit (data) {
  return request({
    url: '/order',
    method: 'post',
    data
  })
}

export function update (data) {
  return request({
    url: '/order',
    method: 'put',
    data
  })
}

export function remove (ids) {
  return request({
    url: '/order',
    method: 'delete',
    data: ids
  })
}
