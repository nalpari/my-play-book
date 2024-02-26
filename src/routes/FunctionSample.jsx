import FullDatepick from '../components/FullDatepick'
import MiniDatepick from '../components/MiniDatepick'
import Autocomplete from '../components/Autocomplete.jsx'

export default function FunctionSample() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="mb-10">
          <FullDatepick />
        </div>
        <div className="mb-2">
          <MiniDatepick />
        </div>
        <div className="mb-2">
          <Autocomplete />
        </div>
      </div>
    </>
  )
}
