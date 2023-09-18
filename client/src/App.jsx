import getTweets from './api/getTweets';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Link, Route, Routes } from 'react-router-dom';

import { useState, useEffect, createContext } from 'react';
import Login from './components/Login';
import SigninModal from './components/SigninModal';
import RegisterModal from './components/RegisterModal';
import DetailedTweet from './components/DetailedTweet';

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const savedUser = sessionStorage.getItem('user');
    const retrievedUser = JSON.parse(savedUser);
    if (user) {
      setUser(retrievedUser);
    }
  }, []);

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const setFunc = async () => {
      if (tweets.length === 0) {
        setTweets(await getTweets());
      }
    };
    setFunc();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, tweets }}>
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
        <Route path='/login' element={<Login />}>
          <Route path='signin' element={<SigninModal />}></Route>
          <Route path='register' element={<RegisterModal />}></Route>
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
