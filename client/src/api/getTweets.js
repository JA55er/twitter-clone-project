import axios from 'axios';
import BASE_URL from '../utils/baseUrl';
// import { useDispatch, useSelector } from 'react-redux';
// import { changePage } from '../reducers/pageSlice';

const getTweets = async (page, skipNew) => {
  // console.log('page from api call!!!!!!', page);
  console.log('skipNew: ', skipNew);
  const skip = skipNew || 0
  const response = await axios.get(`${BASE_URL}/api/tweets/paged?page=${page}&skip=${skip}`);

  const tweets = response.data;
  // console.log(tweets)
  return tweets;
};
// const getTweets = async (page) => {
//   console.log('page from api call!!!!!!', page);
//   const response = await axios.get(`${BASE_URL}/api/tweets/paged?page=${page}`);

//   const tweets = response.data;
//   // console.log(tweets)
//   return tweets;
// };
// // const getTweets = async () => {
// //   const response = await axios.get(`${BASE_URL}/api/tweets/`);
// //   const tweets = response.data;
// //   // console.log(tweets)
// //   return tweets;
// // };

export default getTweets;
