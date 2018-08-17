import request from '@/utils/request'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/loginname',
    method: 'post',
    data
  })
}

export function loginByMobile (mobile, code) {
  const data = {
    mobile,
    code
  }
  return request({
    url: '/login/loginmobile',
    method: 'post',
    data
  })
}
export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
