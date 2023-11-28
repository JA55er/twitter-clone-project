import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const tokenLogin = async (token) => {
  // console.log(token);
  const response = await axios.get(`${BASE_URL}/api/login/tokenlogin`, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};

export default tokenLogin;
