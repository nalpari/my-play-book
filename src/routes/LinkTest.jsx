import { useRecoilState } from 'recoil'
import { tabStore, currentTabIndexStore } from '../store/tabs-atom'
import menuList from '../util/menu-list'

export default function LinkTest() {
  const [tabs, setTabs] = useRecoilState(tabStore)
  const [currentTabIndex, setCurrentTabIndex] =
    useRecoilState(currentTabIndexStore)

  const handleTabReplace = (e) => {
    console.log(e.target.dataset.name)
    console.log(menuList.filter((m) => m.name === e.target.dataset.name))
    const currentComp = menuList.filter((m) => m.name === e.target.dataset.name)
    currentComp[0].id = currentTabIndex
    const tmpTabs = [...tabs]
    tmpTabs[currentTabIndex] = currentComp[0]
    console.log(tmpTabs)
    setTabs(tmpTabs)
  }

  return (
    <>
      <h1 className="text-3xl">Link Tab Replace Test</h1>
      <div className="text-xl">Scenario</div>
      <ul>
        <li>- 이 화면은 리스트 화면이라 가정...</li>
        <li>- 등록버튼 클릭스 현재 탭을 등록 컴포넌트와 바꿔치기 시도</li>
      </ul>
      <div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          data-name="Link Test Regist"
          onClick={handleTabReplace}
        >
          등록화면으로 이동
        </button>
      </div>
    </>
  )
}
