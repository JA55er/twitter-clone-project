import axios from 'axios'

const register = async (credentials) => {
  const response = await axios.post('http://localhost:3000/api/users/newuser', credentials)
  const user = response.data
  console.log(user)
  return user
} 

export default register