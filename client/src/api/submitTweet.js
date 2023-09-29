import axios from 'axios';

const submitTweet = async (data) => {
  const response = await axios.post(
    'http://localhost:3000/api/tweets/newtweet',
    data,
    {
      headers: {
        Authorization: data.token,
      },
    }
  );

  console.log(response)

  return response.data;
};

export default submitTweet;
