import useDatepicker from '../hooks/useDatepicker'

export default function MiniDatepick() {
  const { fromDt, setFromDt, addThreedays } = useDatepicker(
    '2023.03.17',
    'YYYY.MM.DD',
    false,
  )

  return (
    <>
      <div className="w-full">
        <div className="flex items-center mb-6">
          <div className="w-100">
            <label
              className="block text-gray-500 font-bold text-right mb-1 pr-4"
              htmlFor="inline-from-date"
            >
              From Date
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-from-date"
              type="text"
              value={fromDt}
              onChange={(e) => setFromDt(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full flex gap-2">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={addThreedays}
            >
              3일
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
