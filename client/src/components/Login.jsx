import React from 'react';
import TwitterLogo from './TwitterLogo';
import headerIcons from '../utils/headerIcons';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import SigninModal from './SigninModal';
import RegisterModal from './RegisterModal';
import GoogleLoginButton from './GoogleLoginButton';
import BASE_URL from '../utils/baseUrl';

const Login = () => {
  const onGoogleButtonClick = async () => {
    // window.open(`${BASE_URL}/api/auth/google`, '_self');
    window.open(`${BASE_URL}/api/google`, '_self');
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='loginContainer'>
            <div className='loginLogoContainer'>
              <div className='logoContainer'>{headerIcons.twitter}</div>
            </div>
            <div className='loginOptionsContainer'>
              <div className='loginOptionsAreaContainer'>
                <span className='LoginAreaTextContainer'>JOIN NOW</span>
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
                <Link to={'/login/register'}>
                  <div className='loginAreaCreateAccountContainer'>
                    <span>Create account</span>
                  </div>
                </Link>
                <span className='loginAreaAccountTextContaienr'>
                  Already have an account?
                </span>
                <Link to={'/login/signin'}>
                  <div className='loginAreaSignInContainer'>
                    <span>Sign in</span>
                  </div>
                </Link>
                <Link to={'/'}>
                  <div className='loginAreaSignInContainer'>
                    <span>Maybe Later</span>
                  </div>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        }
      >
        <Route path='/register' element={<RegisterModal />}></Route>
        <Route path='/signin' element={<SigninModal />}></Route>
      </Route>
    </Routes>
  );
};

export default Login;
