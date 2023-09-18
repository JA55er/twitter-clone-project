import axios from 'axios';

const submitComment = async (data) => {
  const response = await axios.post(
    'http://localhost:3000/api/comments/newcomment',
    data,
    { headers: { Authorization: data.token } }
  );

  return response.data;
};

export default submitComment;
