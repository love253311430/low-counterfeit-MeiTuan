import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
// 生产环境这里会发送一个token，来判断用户是否登出等等，这里暂时未做开发
export default service
