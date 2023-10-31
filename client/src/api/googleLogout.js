import axios from 'axios'
import BASE_URL from '../utils/baseUrl'

const url = `${BASE_URL}/logout`
// const url = 'http://localhost:8080/logout'

const googleLogout = async () => {
  await axios.get(`${BASE_URL}/logout`)
}

export default googleLogout