const { atom } = require('recoil')

export const authState = atom({
  key: 'isLogin',
  default: false,
})
