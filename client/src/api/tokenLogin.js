import axios from 'axios';

const tokenLogin = async (token) => {
  console.log(token)
  const response = await axios.get(
    'http://localhost:3000/api/login/tokenlogin',
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

export default tokenLogin;
