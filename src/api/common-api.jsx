import axios from 'axios'

export const commonQuery = async (options) => {
  const { url, method = 'get', data = {} } = options

  return await axios({
    url,
    method,
    data,
  }).then((res) => {
    console.log(res)
    return res.data
  })
}

export const commonMutate = async (options) => {
  const { url, method = 'post', data = {} } = options

  return await axios({ url, method, data })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
