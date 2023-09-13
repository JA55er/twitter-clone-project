import axios from 'axios';

const getSingleTweet = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/tweets/${id}`);
  const data = response.data;
  return data;
};

export default getSingleTweet;
