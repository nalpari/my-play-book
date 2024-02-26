import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export default function Tree() {
  const [treeData, setTreeData] = useState([])

  const {
    data: tree,
    isLoading,
    error,
  } = useQuery(
    ['tree', 'menu'],
    async () => {
      return await axios.get('/api/tree-data.json').then((res) => res.data.tree)
    },
    { staleTime: 1000 * 60 },
  )

  useEffect(() => {
    let treeData = []
    if (tree) {
      tree.map((t) => (t.child = []))
      let depth2 = tree.filter((t) => t.depth === 2)
      depth2.map((d) => {
        let parent = tree.find((tr) => tr.id === d.parent)
        parent.child.push(d)
      })
      let depth1 = tree.filter((t) => t.depth === 1)
      depth1.map((d) => {
        let parent = tree.find((tr) => tr.id === d.parent)
        parent.child.push(d)
      })
      tree.filter((t) => t.depth === 0).map((t) => treeData.push(t))
    }
    console.log(treeData)
  }, [tree])

  return <div>tree</div>
}
