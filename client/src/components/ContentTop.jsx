import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
import { changeTheme } from '../reducers/themeSlice';
import utilityIcons from '../utils/utilityIcons';
import ThemeComponent from './ThemeComponent';

const ContentTop = () => {
  const onHomeClick = (e) => {
    console.log(e.target);
    window.scrollTo({ top: 0 });
  };

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const theme = useSelector((state) => state.theme.theme);

  const smallScreen = useMediaQuery({ maxWidth: 1100 });

  const themeIcon =
    theme === 'light' ? utilityIcons.lightModeIcon : utilityIcons.darkModeIcon;

  const onThemeClick = () => {
    dispatch(changeTheme());
  };

  // console.log(user);

  return (
    <div className='contentTopContainer'>
      <div className='homeContainer'>
        <div className='homeButton' onClick={(e) => onHomeClick(e)}>
          <span className='homeSpan'>Home</span>
        </div>
        {/* <div className='themeIconContainer' onClick={onThemeClick}>
          <div className='themeIcon'>{themeIcon}</div>
        </div> */}
        <ThemeComponent />
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
          <NavLink
            to='/login/signin'
            className='contentTopLoginOptionContainer'
          >
            <div className='contentTopLoginButtonContainer'>
              <span className='contentTopLoginButtonText'>Login</span>
            </div>
          </NavLink>
          <NavLink
            to='/login/register'
            className='contentTopLoginOptionContainer contentTopLoginOptionContainerRight'
          >
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
