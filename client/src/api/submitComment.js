import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const submitComment = async (data) => {
  const response = await axios.post(
    `${BASE_URL}/api/comments/newcomment`,
    data,
    { headers: { Authorization: data.token } }
  );

  return response.data;
};

export default submitComment;
