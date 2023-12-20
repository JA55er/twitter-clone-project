import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';

const ContentTop = () => {
  const onHomeClick = () => {
    window.scrollTo({ top: 0 });
  };

  const user = useSelector((state) => state.user.user);

  const smallScreen = useMediaQuery({maxWidth: 1100});

  console.log(user);

  return (
    <div className='contentTopContainer'>
      <div className='homeContainer' onClick={onHomeClick}>
        <div className='homeButton'>
          <span className='homeSpan'>Home</span>
        </div>
      </div>
      {user ? (
        <div className='foryouFollowingContainer'>
          <div className='foryouContainer'>
            <div></div>
            <span className='foryouSpan'>For you</span>
            <div className='foryouContainerActive'></div>
          </div>
          <div className='foryouContainer'>
            <div></div>
            <span className='foryouSpan'>Following</span>
            <div></div>
          </div>
        </div>
      ) : smallScreen ? (
        <div className='contentTopLoginContainer'>
          <NavLink to='/login/signin' className='contentTopLoginOptionContainer'>
            <div className='contentTopLoginButtonContainer'>
              <span className='contentTopLoginButtonText'>Login</span>
            </div>
          </NavLink>
          <NavLink to='/login/register' className='contentTopLoginOptionContainer contentTopLoginOptionContainerRight'>
            <div className='contentTopLoginButtonContainer contentTopRegisterButtonContainer'>
              <span className='contentTopRegisterButtonText'>Register</span>
            </div>
          </NavLink>
        </div>
      ) : null}
      {/* <div className='foryouFollowingContainer'>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>For you</span>
          <div className='foryouContainerActive'></div>
        </div>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Following</span>
          <div></div>
        </div>
      </div> */}
    </div>
  );
};

export default ContentTop;
