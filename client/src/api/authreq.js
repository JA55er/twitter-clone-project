import axios from 'axios'

const authreq = async (data) => {
  const response = await axios.post('http://localhost:3000/api/login/authreq', data, {
    headers: {
      Authorization: data.token,
    },
  })
  console.log(response.data)
  return response.data
}

export default authreq