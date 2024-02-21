import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import LoginButtons from './LoginButtons';
import { Link, redirect, useNavigate } from 'react-router-dom';
import utilityIcons from '../utils/utilityIcons';

import register from '../api/register';
import { useDispatch } from 'react-redux';
import { saveUserAction } from '../reducers/userSlice';
import GoogleLoginButton from './GoogleLoginButton';
import BASE_URL from '../utils/baseUrl';
import googleLogin from '../api/googleLogin';

const RegisterModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onGoogleButtonClick = async () => {
    window.open(`${BASE_URL}/api/google`, '_self');
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = {
        username,
        password,
      };
      const user = await register(credentials);
      dispatch(saveUserAction(user));
      console.log('user: ', user);
      // sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', JSON.stringify(user.token));
      if (user) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='loginModalContainer'>
      <Link to={'/login'}>
        <div className='overlay'></div>
      </Link>
      <div className='loginModal'>
        <div className='loginModalContent'>
          <div className='loginModalTop'>
            <Link to={'/login'}>
              <div className='writeTweetOptionsIconContainer'>
                {utilityIcons.closeIcon}
              </div>
            </Link>
            <div className='loginModalLogo'>{headerIcons.twitter}</div>
            <div className='modalTopRightSide'></div>
          </div>
          <div className='loginModalBottom'>
            <div className='loginModalTopTextContainer'>
              <span className='loginModalTopText'>Register to Twitter</span>
            </div>
            <div
              className='loginModalButtonContainer'
              onClick={onGoogleButtonClick}
            >
              <GoogleLoginButton content={'Login with Google'} />
            </div>
            <div className='loginOptionsSeperator'>
              <div className='seperatorLine'></div>
              <div className='seperatorText'>or</div>
              <div className='seperatorLine'></div>
            </div>
            <form action='post' onSubmit={onFormSubmit}>
              <div className='loginModalInputContainer'>
                <input
                  type='text'
                  className='loginModalInput'
                  placeholder='Username'
                  onChange={onUsernameChange}
                />
              </div>
              <div className='loginModalInputContainer'>
                <input
                  type='password'
                  className='loginModalInput'
                  placeholder='Password'
                  onChange={onPasswordChange}
                />
              </div>
              <div className='loginModalLoginButtonContainer'>
                <div className='loginModalButtonContainer'>
                  <LoginButtons
                    textColor={'#FFF'}
                    backgroundColor={'#000'}
                    content={'Register'}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
