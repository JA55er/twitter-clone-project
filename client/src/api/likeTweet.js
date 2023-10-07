import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const likeTweet = async (data) => {
  console.log(data)
  const response = await axios.post(`${BASE_URL}/api/likes/like/`, data, {
    headers: {
      Authorization: data.token,
    },
  });
  console.log(response.data)
  return response.data;
};

export default likeTweet;
