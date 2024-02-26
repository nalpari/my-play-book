import axios from 'axios'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Detail from '../components/Detail'
import MyBtn from '../components/MyBtn'
import Skeleton from '../components/Skeleton'
import SquareSpinner from '../components/SquareSpinner'
import TextField from '../components/TextField'
import User from '../components/User'
import withLabel from '../components/withLabel'

const UserName = withLabel(TextField)
const UserId = withLabel(TextField)
const UserPw = withLabel(TextField)

/**
 * A function that returns a component.
 * @returns The return statement is returning the following:
 */
export default function Users() {
  /* A hook that allows you to interact with the query cache. */
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [detailId, setDetailId] = useState()

  /* Destructuring the data from the useQuery hook. */
  const {
    data: users,
    isLoading,
    error,
  } = useQuery(
    ['user', 'list'],
    async () => {
      return await axios
        .get('http://localhost:9090/api/v1/user')
        .then((res) => res.data.users)
    },
    {
      staleTime: 1000 * 60,
    },
  )

  const addUser = async (data) => {
    return axios
      .post('http://localhost:9090/api/v1/user', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const { mutate } = useMutation(addUser, {
    onSuccess: () => {
      console.log('success!!')
      queryClient.invalidateQueries('user')
      setId('')
      setPw('')
      setName('')
    },
  })

  const handleSubmit = () => {
    console.log('submit')
    const userData = {
      name,
      loginId: id,
      loginPw: pw,
      kind: 'USER',
    }
    mutate(userData)
  }

  const handleDetail = (id) => {
    setDetailId(id)
  }

  return (
    <>
      <div className="flex flex-col mb-4">
        <div>
          <UserName value={name} onChange={setName} placeholder={`이름`}>
            NAME
          </UserName>
        </div>
        <div>
          <UserId value={id} onChange={setId} placeholder={`아이디`}>
            ID
          </UserId>
        </div>
        <div>
          <UserPw value={pw} onChange={setPw} placeholder={`비밀번호`}>
            PW
          </UserPw>
        </div>
        <div className="flex justify-end mt-2">
          <MyBtn
            onClick={handleSubmit}
            classname={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
          >
            Submit
          </MyBtn>
        </div>
      </div>
      {isLoading && <Skeleton />}
      {error && <SquareSpinner />}
      <User users={users} onClick={handleDetail} />
      {detailId && <Detail id={detailId} />}
    </>
  )
}
