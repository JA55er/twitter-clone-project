import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import LoginButtons from './LoginButtons';
import { Link, redirect, useNavigate } from 'react-router-dom';
import utilityIcons from '../utils/utilityIcons';
import login from '../api/login';
import { useDispatch } from 'react-redux';
import { saveUserAction } from '../reducers/userSlice';
import GoogleLoginButton from './GoogleLoginButton';
import BASE_URL from '../utils/baseUrl';

const SigninModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onGoogleButtonClick = async () => {
    window.open(`${BASE_URL}/api/google`, '_self');
    // window.open(`${BASE_URL}/api/auth/google`, '_self');
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    const user = await login(credentials);
    const token = user.token;
    // sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', JSON.stringify(token));
    dispatch(saveUserAction(user));
    if (user) {
      navigate('/');
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
            <div className='loginModalTopRightSide'></div>
          </div>
          <div className='loginModalBottomContainer'>
            <div className='loginModalBottom'>
              <div className='loginModalTopTextContainer'>
                <span className='loginModalTopText'>Sign in to Twitter</span>
              </div>
              <div
                className='loginModalButtonContainer'
                onClick={onGoogleButtonClick}
              >
                <GoogleLoginButton
                  textColor={'#000'}
                  border={'#ccc solid 1px'}
                  content={'Login with Google'}
                />
              </div>
              <div className='loginOptionsSeperator'>
                <div className='seperatorLine'></div>
                <div className='seperatorText'>or</div>
                <div className='seperatorLine'></div>
              </div>
              <form action='post' onSubmit={(e) => onFormSubmit(e)}>
                <div className='loginModalInputContainer'>
                  <input
                    type='text'
                    className='loginModalInput'
                    placeholder='Username'
                    onChange={(e) => onUsernameChange(e)}
                  />
                </div>
                <div className='loginModalInputContainer'>
                  <input
                    type='password'
                    className='loginModalInput'
                    placeholder='Password'
                    onChange={(e) => onPasswordChange(e)}
                  />
                </div>
                {/* <div className='modalPasswordContainer'></div> */}
                <div className='loginModalLoginButtonContainer'>
                  <div className='loginModalButtonContainer'>
                    <LoginButtons
                      textColor={'#FFF'}
                      backgroundColor={'#000'}
                      content={'Login'}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
