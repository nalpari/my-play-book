import { atom } from 'recoil'

export const tabStore = atom({
  key: 'tabs',
  default: [],
})

export const currentTabIndexStore = atom({
  key: 'currentTabIndex',
  default: 0,
})
