// import { useState } from 'react'
import menuList from '../util/menu-list'

// import { useRecoilState } from 'recoil'
// import { tabStore, currentTabIndexStore } from '../store/tabs-atom'
import { useFwTab } from '../hooks/useFwTab.jsx'
import {
  AiOutlineCloseCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineClose,
} from 'react-icons/ai'

export default function DuplicatedTab() {
  const {
    tabs,
    currentTabIndex,
    handleAddTab,
    handleChangeTab,
    handleCloseTab,
    handleNextTab,
    handlePrevTab,
    handleClearTab,
  } = useFwTab()
  // const [tabs, setTabs] = useState([])
  // const [tabs, setTabs] = useRecoilState(tabStore)
  // const [currentTabIndex, setCurrentTabIndex] = useState(0)
  // const [currentTabIndex, setCurrentTabIndex] =
  //   useRecoilState(currentTabIndexStore)

  // const handleAdd = (idx) => {
  //   const menuName = menuList[idx].name
  //   const existMenu = tabs.filter((m) => m.name === menuName)
  //
  //   if (existMenu.length > 0) {
  //     setCurrentTabIndex(existMenu[0].id)
  //   } else {
  //     const tabIndex = tabs.length
  //     const newTab = initMenuData(menuList[idx])
  //     newTab.id = tabIndex
  //
  //     setTabs([...tabs, newTab])
  //     setCurrentTabIndex(tabIndex)
  //   }
  // }

  // const initMenuData = (menuObj) => {
  //   if (menuObj?.id !== undefined) {
  //     const { id, ...obj } = menuObj
  //     return obj
  //   }
  //   return menuObj
  // }

  // const handleChangeTab = (idx) => {
  //   // console.log(e.target.dataset.order)
  //   setCurrentTabIndex(Number(idx))
  // }

  // const handleCloseTab = (e, idx) => {
  //   console.log(e)
  //   e.stopPropagation()
  //   console.log(idx)
  // }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        {menuList &&
          menuList.map((menu, idx) => (
            <button
              key={idx}
              onClick={() => handleAddTab(idx)}
              data-order={idx}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {menu.name}
            </button>
          ))}
      </div>

      <div className="flex gap-2 mb-4">
        {tabs &&
          tabs.map((tab, idx) => (
            <button
              key={idx}
              data-order={idx}
              onClick={() => handleChangeTab(idx)}
              className={`flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded ${
                currentTabIndex === idx ? `border-b-4` : ``
              }`}
            >
              <span className="mx-1">{tab.name}</span>
              <AiOutlineCloseCircle onClick={(e) => handleCloseTab(e, idx)} />
            </button>
          ))}
        <button
          onClick={handlePrevTab}
          className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
        >
          <AiOutlineDoubleLeft />
        </button>
        <button
          onClick={handleNextTab}
          className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
        >
          <AiOutlineDoubleRight />
        </button>
        <button
          onClick={handleClearTab}
          className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className="flex gap-2 flex-col">
        {tabs &&
          tabs.map((tab, idx) => (
            <div
              key={idx}
              className={`py-4 ${currentTabIndex === idx ? `block` : `hidden`}`}
            >
              {tab.component}
            </div>
          ))}
      </div>
      <div>
        {tabs &&
          tabs.map((t) => (
            <div key={t.id}>
              {t.name} // {t.id}
            </div>
          ))}
        <div>{currentTabIndex}</div>
      </div>
    </>
  )
}
