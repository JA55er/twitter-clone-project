// import icons from '../utils/icons';
import HeaderLink from './HeaderLink';
import TwitterLogo from './TwitterLogo';
import headerIcons from '../utils/headerIcons';
import HeaderAccountMenu from './HeaderAccountMenu';
import BASE_URL from '../utils/baseUrl';

const Header = () => {
  const headerLinks = [
    {
      label: 'Home',
      icon: headerIcons.home,
      link: '',
    },
    {
      label: 'Explore',
      icon: headerIcons.explore,
      link: '',
    },
    {
      label: 'Notifications',
      icon: headerIcons.notifications,
      link: '',
    },
    {
      label: 'Messages',
      icon: headerIcons.messages,
      link: '',
    },
    {
      label: 'Lists',
      icon: headerIcons.lists,
      link: '',
    },
    {
      label: 'Bookmarks',
      icon: headerIcons.bookmarks,
      link: '',
    },
    {
      label: 'Communities',
      icon: headerIcons.communities,
      link: '',
    },
    {
      label: 'Verified',
      icon: headerIcons.verified,
      link: '',
    },
    {
      label: 'Profile',
      icon: headerIcons.profile,
      link: '',
    },
    {
      label: 'More',
      icon: headerIcons.more,
      link: '',
    },
  ];

  const onTwitterLogoClick = () => {
    if (
      window.location.href === `http://localhost:5173/` ||
      window.location.href === `https://twitter-6t.lm.r.appspot.com/`
    ) {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='headerTopContentContainer'>
          <div>
            <div className='scrollTopTwitterLogo' onClick={onTwitterLogoClick}>
              <TwitterLogo />
            </div>
            <div className='headerLinkListContainer'>
              {headerLinks.map((link) => {
                return <HeaderLink link={link} key={link.label} />;
              })}
            </div>
          </div>
          <div className='button'>
            <span className='buttonLabel'>Tweet</span>
          </div>
        </div>
        <HeaderAccountMenu />
      </div>
    </div>
  );
};

export default Header;
