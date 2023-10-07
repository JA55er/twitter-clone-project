import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const authreq = async (data) => {
  const response = await axios.post(`${BASE_URL}/api/login/authreq`, data, {
    headers: {
      Authorization: data.token,
    },
  });
  console.log(response.data);
  return response.data;
};

export default authreq;
