import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import LoginButtons from './LoginButtons';
import { Link, redirect, useNavigate } from 'react-router-dom';
import utilityIcons from '../utils/utilityIcons';
import login from '../api/login';
import { useDispatch } from 'react-redux';
import { saveUserAction } from '../reducers/userSlice';

const SigninModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    const user = await login(credentials);
    sessionStorage.setItem('user', JSON.stringify(user));
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
    <div className='modalContainer'>
      <Link to={'/login'}>
        <div className='overlay'></div>
      </Link>
      <div className='modal'>
        <div className='modalContent'>
          <div className='modalTop'>
            <Link to={'/login'}>
              <div className='writeTweetOptionsIconContainer'>
                {utilityIcons.closeIcon}
              </div>
            </Link>
            <div className='modalLogo'>{headerIcons.twitter}</div>
            <div className='modalTopRightSide'></div>
          </div>
          <div className='modalBottom'>
            <div className='modalTopTextContainer'>
              <span className='modalTopText'>Sign in to Twitter</span>
            </div>
            <div className='modalButtonContainer'>
              <LoginButtons
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
              <div className='modalInputContainer'>
                <input
                  type='text'
                  className='modalInput'
                  placeholder='Username'
                  onChange={(e) => onUsernameChange(e)}
                />
              </div>
              <div className='modalInputContainer'>
                <input
                  type='text'
                  className='modalInput'
                  placeholder='Password'
                  onChange={(e) => onPasswordChange(e)}
                />
              </div>
              {/* <div className='modalPasswordContainer'></div> */}
              <div className='modalLoginButtonContainer'>
                <div className='modalButtonContainer'>
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
  );
};

export default SigninModal;
