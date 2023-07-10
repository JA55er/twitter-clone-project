import icons from '../utils/icons';
import HeaderLink from './HeaderLink';
import TwitterLogo from './TwitterLogo';

const Header = () => {
  const headerLinks = [
    {
      label: 'Home',
      icon: icons.home,
      link: '',
    },
    {
      label: 'Explore',
      icon: icons.explore,
      link: '',
    },
    {
      label: 'Notifications',
      icon: icons.notifications,
      link: '',
    },
    {
      label: 'Messages',
      icon: icons.messages,
      link: '',
    },
    {
      label: 'Verified',
      icon: icons.verified,
      link: '',
    },
    {
      label: 'Profile',
      icon: icons.profile,
      link: '',
    },
    {
      label: 'More',
      icon: icons.more,
      link: '',
    },
  ];

  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='headerTopContentContainer'>
          <div>
            <TwitterLogo />
            <div className='headerLinkListContainer'>
              {headerLinks.map((link) => {
                return <HeaderLink link={link} />;
              })}
            </div>
          </div>
          <div className='button'>
            <span className='buttonLabel'>Tweet</span>
          </div>
        </div>
        <div className='headerAccount'>
          <div className='headerAccountIcon'></div>
          <div className='headerAccountName'>JA55er</div>
          <div className='headerAccountOptionsIcon'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
