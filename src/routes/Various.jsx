import React, { Suspense } from 'react'

// import SampleComp1 from '../components/SampleComp1'
const SampleComp1 = React.lazy(() => import('../components/SampleComp1'))

const components = {
  SampleComp1: {
    name: 'SampleComp1',
    comp: <SampleComp1 />,
  },
}

export default function Various(props) {
  const SpecificComponent = components[props.name].comp
  return (
    <Suspense fallback={<div>Loading...</div>}>{SpecificComponent}</Suspense>
  )
}
