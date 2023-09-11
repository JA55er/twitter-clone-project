import axios from 'axios'

const login = async (credentials) => {
  const response = await axios.post('http://localhost:3000/api/login', credentials)
  const users = response.data
  return users
}

export default login