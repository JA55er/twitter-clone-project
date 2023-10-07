import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const getTweets = async () => {
  const response = await axios.get(`${BASE_URL}/api/tweets/`);
  const tweets = response.data;
  // console.log(tweets)
  return tweets;
};

export default getTweets;
