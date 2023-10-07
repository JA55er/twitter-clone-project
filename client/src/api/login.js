import axios from 'axios'
import BASE_URL from '../utils/baseUrl';

const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/login`, credentials)
  const users = response.data
  return users
}

export default login