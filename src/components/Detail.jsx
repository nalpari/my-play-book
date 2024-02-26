import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Skeleton from './Skeleton'
import SquareSpinner from './SquareSpinner'

export default function Detail({ id }) {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery(
    ['user', id],
    () => {
      return axios
        .get(`http://localhost:9090/api/v1/user/${id}`)
        .then((res) => res.data)
    },
    {
      staleTime: 1000 * 60,
    },
  )

  return (
    <>
      {isLoading && <Skeleton />}
      {error && <SquareSpinner />}
      {user && (
        <div>
          <ul>
            <li>id: {user.id}</li>
            <li>name: {user.name}</li>
            <li>loginId: {user.loginId}</li>
            <li>kind: {user.kind}</li>
          </ul>
        </div>
      )}
    </>
  )
}
