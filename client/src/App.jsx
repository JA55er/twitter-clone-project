import getTweets from './api/getTweets';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useLocation } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
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
import axios from 'axios';
import BASE_URL from './utils/baseUrl';
import tokenLogin from './api/tokenLogin';
import Profile from './components/Profile';
import googleLogin from './api/googleLogin';
import { changePage } from './reducers/pageSlice';

let didInit = false;

const App = () => {
  const user = useSelector((state) => state.user.user);

  const url = useLocation();

  const dispatch = useDispatch();

  const page = useSelector((state) => state.page.page);

  const newTweets = useSelector((state) => state.newTweetsList.newTweets);

  ///unoptimized
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [page, newTweets.length]);

  // const handleScroll = async () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     window.removeEventListener('scroll', handleScroll);
  //     console.log('new tweets: ', newTweets.length);
  //     const tweets = await getTweets(page, newTweets.length);
  //     // const tweets = await getTweets(page);
  //     dispatch(changePage(page + 1));
  //     dispatch(getTweetsFromServer(tweets));
  //   }
  // };

  console.log('b');

  useEffect(() => {
    window.onscroll = handleScroll;
    return () => (window.onscroll = null);
  }, [page, newTweets.length]);
  
  const handleScroll = async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      window.onscroll = null; // Remove the event listener temporarily
      console.log('new tweets: ', newTweets.length);
      const tweets = await getTweets(page, newTweets.length);
      // const tweets = await getTweets(page);
      dispatch(changePage(page + 1));
      dispatch(getTweetsFromServer(tweets));
      window.onscroll = handleScroll; // Add the event listener back after processing
    }
  };
  ///

  useEffect(() => {
    const getInitialTweets = async () => {
      const tweetsResponse = await getTweets(page);
      dispatch(changePage(page + 1));
      dispatch(getTweetsFromServer(tweetsResponse));
    };
    if (!didInit) {
      didInit = true;
      getInitialTweets();
    }
  }, []);

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

  ///
  // useEffect(() => {
  //   const setFunc = async () => {
  //     if (tweets.length === 0) {
  //       const retrievedTweets = await getTweets();
  //       dispatch(getTweetsFromServer(retrievedTweets));
  //     }
  //   };
  //   setFunc();
  // }, []);
  ///

  useEffect(() => {
    const loginThroughGoogle = async () => {
      const acc = await googleLogin();
      dispatch(saveUserAction(acc));
    };
    if (!user) {
      loginThroughGoogle();
    }
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <div className='appContainer'>
              {/* <div onClick={getPage} >aaaaaaaaaaaaaaaaaaaaaaa</div> */}
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
      <Route path='/login/*' element={<Login />}>
        {/* <Route path='signin' element={<SigninModal />}></Route>
        <Route path='register' element={<RegisterModal />}></Route> */}
      </Route>
      {/* <Route path='/login' element={<Login />}>
        <Route path='signin' element={<SigninModal />}></Route>
        <Route path='register' element={<RegisterModal />}></Route>
      </Route> */}
    </Routes>
  );
};

export default App;
