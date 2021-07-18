import request from '@/utils/request'

export function getBanner( ) {
  return request({
    url: '/banner',
    method: 'get'
  })
}

export function getRecommend( ) {
  return request({
    url: '/recommend-product',
    method: 'get'
  })
}

export function getHot( ) {
  return request({
    url: '/hot-product',
    method: 'get'
  })
}

export function getNew( ) {
  return request({
    url: '/new-product',
    method: 'get'
  })
}
