import request from '@/utils/request'

export function getlist (page) {
  return request({
    url: '/api/list',
    method: 'get',
    params: page
  })
}
