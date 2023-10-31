import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const googleLogin = async () => {
  console.log('inside googleLogin');
  const response = await axios.get(`${BASE_URL}/login/success`, {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  console.log('google login response: ',response.data)
  return response.data.user;
};
// const googleLogin = async () => {
//   console.log('inside googleLogin');
//   const response = await axios.get(`${BASE_URL}/api/users/profile`, {
//     withCredentials: true,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log('google login response: ',response.data)
//   return response.data;
// };

export default googleLogin;
