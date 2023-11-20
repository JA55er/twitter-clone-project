import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const googleLogout = async () => {
  await axios.get(`${BASE_URL}/api/google/logout`);
};

export default googleLogout;
