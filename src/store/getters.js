const getters = {
  userId: state => state.user.userId,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  hasaccount: state => state.user.hasaccount,
  mobile: state => state.user.mobile,
  wx: state => state.user.wx
}
export default getters
