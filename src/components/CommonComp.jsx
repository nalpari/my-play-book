import { Suspense, lazy } from 'react'

export default function CommonComp(props) {
  const Comp = lazy(() => import(`./Inputs`))
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Comp />
      </Suspense>
    </>
  )
}
