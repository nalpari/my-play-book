import { useState } from 'react'

const useTreeConversion = (originTreeData) => {
  const [treeData, setTreeData] = useState([])

  originTreeData.map((t) => (t.child = []))
  let depth2 = originTreeData.filter((t) => t.depth === 2)
  depth2.map((d) => {
    let parent = originTreeData.find((tr) => tr.id === d.parent)
    parent.child.push(d)
  })
  let depth1 = originTreeData.filter((t) => t.depth === 1)
  depth1.map((d) => {
    let parent = originTreeData.find((tr) => tr.id === d.parent)
    parent.child.push(d)
  })
  // originTreeData.filter((t) => t.depth === 0).map((t) => treeData.push(t))
  originTreeData
    .filter((t) => t.depth === 0)
    .map((t) => setTreeData((prev) => [...prev, t]))

  return treeData
}

export default useTreeConversion
