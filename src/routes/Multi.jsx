import { useState } from 'react'
import SampleComp2 from '../components/SampleComp2'
import SampleComp3 from '../components/SampleComp3'
import SampleComp4 from '../components/SampleComp4'
import Various from './Various'

/**
 * Multi 클래스입니다
 * @class Multi
 * @author yoo sang wook
 */
export default function Multi() {
  /* An array of objects. Each object has a key of id, label, value, and comp. The comp key is a React
  component. */
  const data = [
    {
      id: 0,
      label: 'Sample1',
      value: 'Sample1',
      name: 'SampleComp1',
      comp: <Various name="SampleComp1" />,
    },
    {
      id: 1,
      label: 'Sample2',
      value: 'Sample2',
      name: 'SampleComp2',
      comp: <SampleComp2 />,
    },
    {
      id: 2,
      label: 'Sample3',
      value: 'Sample3',
      name: 'SampleComp3',
      comp: <SampleComp3 />,
    },
    {
      id: 2,
      label: 'Sample4',
      value: 'Sample4',
      name: 'SampleComp4',
      comp: <SampleComp4 />,
    },
  ]

  /* A React hook. It is a function that lets you use state in a functional component. */
  const [comps, setComps] = useState([])
  const [curr, setCurr] = useState(0)

  const handleAdd = (e) => {
    let exist = comps.find((c) => c.id === Number(e.target.dataset.order))
    exist ?? setComps([...comps, data[e.target.dataset.order]])
    setCurr(data[e.target.dataset.order].id)
  }

  const handleMoveTab = (e) => setCurr(Number(e.target.dataset.order))

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          data-order="0"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          component add1
        </button>
        <button
          onClick={handleAdd}
          data-order="1"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          component add2
        </button>
        <button
          onClick={handleAdd}
          data-order="2"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          component add3
        </button>
        <button
          onClick={handleAdd}
          data-order="3"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          component add4
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {comps &&
          comps.map((comp) => (
            <button
              key={comp.id}
              onClick={handleMoveTab}
              data-order={comp.id}
              className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded ${
                curr === comp.id ? `border-b-4` : ``
              }`}
            >
              {comp.label}
            </button>
          ))}
      </div>

      <div className="flex mt-4 flex-col">
        {comps &&
          comps.map((comp, idx) => (
            <div
              className={`py-4 ${curr === comp.id ? `block` : `hidden`}`}
              key={idx}
            >
              {comp.comp}
            </div>
          ))}
      </div>
    </>
  )
}
