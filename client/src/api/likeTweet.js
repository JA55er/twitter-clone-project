import axios from 'axios';

const likeTweet = async (data) => {
  console.log(data)
  const response = await axios.post('http://localhost:3000/api/likes/like/', data, {
    headers: {
      Authorization: data.token,
    },
  });
  console.log(response.data)
  return response.data;
};

export default likeTweet;
