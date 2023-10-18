import axios from 'axios'
import BASE_URL from '../utils/baseUrl'

const uploadAttachment = async (data) => {
  console.log('data: ',data.get('file'))
  const response = await axios.post(`${BASE_URL}/upload`, data, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
  console.log(response.data)
  return response.data
}

export default uploadAttachment