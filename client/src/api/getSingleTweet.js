import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const getSingleTweet = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/tweets/${id}`);
  const data = response.data;
  return data;
};

export default getSingleTweet;
