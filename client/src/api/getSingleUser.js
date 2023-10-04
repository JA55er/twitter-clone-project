import axios from 'axios'

const getSingleUser = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/users/${id}`)
  return response.data
}

export default getSingleUser