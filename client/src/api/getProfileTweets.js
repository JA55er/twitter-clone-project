import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const getProfileTweets = async (id, page, skipNew) => {
  console.log('skipNew: ', skipNew);
  const skip = skipNew || 0;
  const response = await axios.get(
    `${BASE_URL}/api/tweets/usertweets?profile=${id}&page=${page}&skip=${skip}`
  );

  const tweets = response.data;
  return tweets;
};

export default getProfileTweets;
