import request from '@/utils/request'

export function getweather (query) {
  return request({
    baseURL: 'https://free-api.heweather.com',
    url: '/s6/weather/now',
    method: 'get',
    params: query
  })
}
