import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/baseUrl';
import googleLogin from '../api/googleLogin';
import { saveUserAction } from '../reducers/userSlice';
import { useDispatch } from 'react-redux';

const SidebarLogin = () => {
  const dispatch = useDispatch();
  const onGoogleButtonClick = async () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const loginThroughGoogle = async () => {
      console.log('before calling googleLogin');
      const acc = await googleLogin();
      console.log('acc: ', acc);
      dispatch(saveUserAction(acc));
    };

    const popup = window.open(
      `${BASE_URL}/api/google/?returnTo=${window.location.href}`,
      'GoogleLogin',
      `width=${width},height=${height},left=${left},top=${top}`
    );
    if (popup) {
      const oauthPopup = setInterval(() => {
        if (popup.closed) {
          clearInterval(oauthPopup);
          loginThroughGoogle();
        }
      }, 1000);
    }
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
