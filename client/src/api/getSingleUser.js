import axios from 'axios'
import BASE_URL from '../utils/baseUrl';

const getSingleUser = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/users/${id}`)
  return response.data
}

export default getSingleUser