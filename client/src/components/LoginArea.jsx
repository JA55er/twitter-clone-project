import React, { useContext, useState } from 'react';
import login from '../api/login';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const LoginArea = () => {
  // const appUser = useContext(AppContext)

  // const loggedUser = sessionStorage.getItem('user')

  // console.log(loggedUser)

  // console.log(appUser)

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const onUsernameInputChange = (e) => {
  //   setUsername(e.target.value)
  // };

  // const onPasswordInputChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const onLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('username: ', username);
  //   console.log('password: ', password);
  //   const credentials = {
  //     username,
  //     password
  //   }
  //   const user = await login(credentials)

  //   sessionStorage.setItem('user', JSON.stringify(user));

  //   appUser.setUser(user)
  // };

  // if (loggedUser) {
  //   console.log('aaaa')
  // }

  // return (
    // <div className='loginAreaContainer'>
    //   <form className='loginForm' action='post' onSubmit={onLoginSubmit}>
    //     <input type='text' onChange={onUsernameInputChange} />
    //     <input type='text' onChange={onPasswordInputChange} />
    // <Link to={'/login'}>
    //   <div className='loginButtonContainer'>
    //     <button className='loginButton' role='button' type='submit'>
    //       Login
    //     </button>
    //   </div>
    // </Link>
    //   </form>
    // </div>
  // );
};

export default LoginArea;
