import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const submitTweet = async (data) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}/api/tweets/newtweet`, data, {
    headers: { Authorization: data.token, 'Content-Type': 'application/json' },
  });

  console.log(response);

  return response.data;
};

export default submitTweet;
