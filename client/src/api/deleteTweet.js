import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const deleteTweet = async (data) => {
  const response = await axios.delete(`${BASE_URL}/api/tweets/delete/${data.id}`, {
    headers: { Authorization: data.token },
  });
  console.log(response.data);
  return response.data;
};

export default deleteTweet;
