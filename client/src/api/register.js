import axios from 'axios'
import BASE_URL from '../utils/baseUrl';

const register = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/users/newuser`, credentials)
  const user = response.data
  console.log(user)
  return user
} 

export default register