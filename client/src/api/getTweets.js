import axios from 'axios';

const getTweets = async () => {
  const response = await axios.get('http://localhost:3000/api/tweets/');
  const tweets = response.data;
  // console.log(tweets)
  return tweets;
};

export default getTweets;
