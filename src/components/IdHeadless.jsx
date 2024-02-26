import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function IdHeadless(props) {
  if (!props.children || typeof props.children !== 'function') return null

  const uuid = useMemo(() => uuidv4(), [])

  return props.children({
    uuid,
  })
}
