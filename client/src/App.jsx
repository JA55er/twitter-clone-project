import getTweets from './api/getTweets';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Link, Route, Routes } from 'react-router-dom';

import { useState, useEffect, createContext } from 'react';
import Login from './components/Login';
import Modal from './components/Modal';

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const savedUser = sessionStorage.getItem('user');
    const retrievedUser = JSON.parse(savedUser);
    console.log(user);
    if (user) {
      console.log(retrievedUser);
      setUser(retrievedUser);
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='appContainer'>
                <Header />
                <Content />
                <Sidebar />
                <nav>
                  <Link to='/login'>login</Link>
                </nav>
              </div>
            </div>
          }
        ></Route>
        <Route path='/login' element={<Login />}>
          <Route path='signin' element={<Modal />}></Route>
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
