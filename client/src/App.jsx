import getTweets from './api/getTweets';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useLocation } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import { useState, useEffect, createContext, useRef } from 'react';
import Login from './components/Login';
import SigninModal from './components/SigninModal';
import RegisterModal from './components/RegisterModal';
import DetailedTweet from './components/DetailedTweet';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTweetsFromServer,
  updateDetailedInList,
} from './reducers/tweetListSlice';
// import { setScroll } from './reducers/scrollSlice';
import { saveUserAction } from './reducers/userSlice';
import { setDetailedTweet } from './reducers/detailedTweetSlice';

///////uncommentTokenLogin
import tokenLogin from './api/tokenLogin';
import Profile from './components/Profile';

const App = () => {

  console.log(process.env.NODE_ENV)
  const user = useSelector((state) => state.user.user);

  const url = useLocation();

  const dispatch = useDispatch();

  // const scrolled = useSelector((state) => state.scroll.value);

  // useEffect(() => {
  //   console.log('triggered');
  //   if (window.location.href === 'http://localhost:5173/') {
  //     console.log('inside triggered');
  //       window.scrollTo({ top: scrolled });
  //   }
  // }, [location]);

  // const handleScroll = () => {
  //   if (window.location.href === 'http://localhost:5173/') {
  //     const position = window.scrollY;
  //     dispatch(setScroll(position));
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);




  const tweets = useSelector((state) => state.tweetsList.tweets);

  const detailedTweet = useSelector(
    (state) => state.detailedTweet.detailedTweet
  );

  useEffect(() => {
    dispatch(updateDetailedInList(detailedTweet));
  }, [detailedTweet]);

  useEffect(() => {
    const savedToken = JSON.parse(sessionStorage.getItem('token'));
    const loginOnrefresh = async () => {
      const refUser = await tokenLogin(savedToken);
      dispatch(saveUserAction(refUser));
    };
    if (savedToken) {
      loginOnrefresh();
    }
  }, []);

  useEffect(() => {
    if (url.pathname === '/') {
      dispatch(setDetailedTweet({}));
    }
  }, [url.pathname]);

  useEffect(() => {
    const setFunc = async () => {
      if (tweets.length === 0) {
        const retrievedTweets = await getTweets();
        dispatch(getTweetsFromServer(retrievedTweets));
      }
    };
    setFunc();
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <div className='appContainer'>
              <Header />
              <Content />
              <Sidebar />
            </div>
          </div>
        }
      ></Route>
      <Route
        path='/tweet/:id'
        element={
          <div>
            <div className='appContainer'>
              <Header />
              <DetailedTweet />
              <Sidebar />
            </div>
          </div>
        }
      ></Route>
      <Route
        path='/profile/:id'
        element={
          <div>
            <div className='appContainer'>
              <Header />
              <Profile />
              <Sidebar />
            </div>
          </div>
        }
      ></Route>
      <Route path='/login' element={<Login />}>
        <Route path='signin' element={<SigninModal />}></Route>
        <Route path='register' element={<RegisterModal />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
