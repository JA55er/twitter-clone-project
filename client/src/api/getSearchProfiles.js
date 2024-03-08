import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

const getSearchProfiles = async (searchText) => {
  const response = await axios.get(`${BASE_URL}/api/users/search/${searchText}`);
  return response.data;
};

export default getSearchProfiles;
