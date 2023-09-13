import React, { useContext, useState } from 'react';
import headerIcons from '../utils/headerIcons';
import LoginButtons from './LoginButtons';
import { Link, redirect, useNavigate } from 'react-router-dom';
import utilityIcons from '../utils/utilityIcons';
import login from '../api/login';
import { AppContext } from '../App';
import register from '../api/register';

const RegisterModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const appUser = useContext(AppContext);

  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    const user = await register(credentials);
    sessionStorage.setItem('user', user);
    appUser.setUser(user);
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
            <form action='post' onSubmit={onFormSubmit}>
              <div className='modalInputContainer'>
                <input
                  type='text'
                  className='modalInput'
                  placeholder='Username'
                  onChange={onUsernameChange}
                />
              </div>
              <div className='modalInputContainer'>
                <input
                  type='text'
                  className='modalInput'
                  placeholder='Password'
                  onChange={onPasswordChange}
                />
              </div>
              <div className='modalLoginButtonContainer'>
                <div className='modalButtonContainer'>
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
