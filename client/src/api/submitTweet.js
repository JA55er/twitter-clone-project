import axios from "axios";

const submitTweet = async (data) => {
  console.log(data)
  const response = axios.post('http://localhost:3000/api/tweets/newtweet', data, {
    headers: {
      Authorization: data.token
    }
  })

  return response.data
}

export default submitTweet;