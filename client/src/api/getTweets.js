import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const getTweets = async (page, skipNew) => {
  console.log('skipNew: ', skipNew);
  const skip = skipNew || 0
  const response = await axios.get(`${BASE_URL}/api/tweets/paged?page=${page}&skip=${skip}`);

  const tweets = response.data;
  return tweets;
};

export default getTweets;
