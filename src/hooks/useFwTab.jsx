import { useRecoilState } from 'recoil'
import { currentTabIndexStore, tabStore } from '../store/tabs-atom.js'
import menuList from '../util/menu-list.jsx'

export const useFwTab = () => {
  const [tabs, setTabs] = useRecoilState(tabStore)
  const [currentTabIndex, setCurrentTabIndex] =
    useRecoilState(currentTabIndexStore)

  const handleAddTab = (idx) => {
    const menuName = menuList[idx].name
    const existMenu = tabs.filter((m) => m.name === menuName)

    if (existMenu.length > 0) {
      setCurrentTabIndex(existMenu[0].id)
    } else {
      const tabIndex = tabs.length
      const newTab = initMenuData(menuList[idx])
      newTab.id = tabIndex

      setTabs([...tabs, newTab])
      setCurrentTabIndex(tabIndex)
    }
  }

  const initMenuData = (menuObj) => {
    if (menuObj?.id !== undefined) {
      const { id, ...obj } = menuObj
      return obj
    }
    return menuObj
  }

  const handleChangeTab = (idx) => {
    setCurrentTabIndex(Number(idx))
  }

  const handleCloseTab = (e, idx) => {
    e.stopPropagation()
    //지워지는 탭 인덱스에 따라 현재 포커싱 탭 인덱스 보정
    let newCurrentTabIndex = currentTabIndex
    if (currentTabIndex === idx) {
      if (idx !== 0) {
        setCurrentTabIndex(Number(--newCurrentTabIndex))
      }
    } else {
      if (currentTabIndex > idx) {
        setCurrentTabIndex(Number(--newCurrentTabIndex))
      }
    }
    //tabs 리스트에서 닫히는 탭 데이터 삭제
    const newTabList = tabs.filter((t) => t.id !== idx)
    setTabs(newTabList)
  }

  //다음 탭으로 이동
  const handleNextTab = () => {
    if (tabs.length - 1 === currentTabIndex) {
      alert('The last tab!!!')
      return false
    }
    let newCurrentTabIndex = currentTabIndex
    setCurrentTabIndex(Number(++newCurrentTabIndex))
  }

  //이전 탭으로 이동
  const handlePrevTab = () => {
    if (currentTabIndex === 0) {
      alert('The first tab!!!')
      return false
    }
    let newCurrentTabIndex = currentTabIndex
    setCurrentTabIndex(Number(--newCurrentTabIndex))
  }

  //현재 열린 탭 전부 클리어
  const handleClearTab = () => {
    setTabs([])
    setCurrentTabIndex(0)
  }

  return {
    tabs,
    currentTabIndex,
    handleAddTab,
    initMenuData,
    handleChangeTab,
    handleCloseTab,
    handleNextTab,
    handlePrevTab,
    handleClearTab,
  }
}
