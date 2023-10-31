import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/baseUrl';

const SidebarLogin = () => {
  const onGoogleButtonClick = async () => {
    // console.log(`${BASE_URL}/api/auth/googlelogin?returnTo=${window.location.href}`);
    // window.open(
    //   `${BASE_URL}/api/auth/google?returnTo=${window.location.href}`,
    //   '_self'
    // );
    window.open(
      `${BASE_URL}/google`,
      '_self'
    );
    // window.open(
    //   `${BASE_URL}/auth/google?returnTo=${window.location.href}`,
    //   '_self'
    // );
    // window.open(`http://localhost:8080/auth/google?returnTo=${window.location.href}`, '_self');
  };
  return (
    <div className='homeLoginContainer'>
      <div className='homeLoginTopTextContainer'>
        <span className='homeLoginTopText'>New to Twitter?</span>
      </div>
      <div className='homeLoginCommentTextContainer'>
        <span className='homeLoginCommentText'>
          Sign up now to make tweets!
        </span>
      </div>
      <div className='homeLoginButtonsContainer'>
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
        <Link to={'/login'}>
          <div
            className='loginAreaSignInContainer'
            style={{ marginBottom: '0px' }}
          >
            <span>Sign in</span>
          </div>
        </Link>
      </div>
      <div className='homeLoginCommentTextContainerBottom'>
        <span className='homeLoginCommentText'>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </span>
      </div>
    </div>
  );
};

export default SidebarLogin;
