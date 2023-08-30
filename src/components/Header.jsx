// import icons from '../utils/icons';
import HeaderLink from './HeaderLink';
import TwitterLogo from './TwitterLogo';
import headerIcons from '../utils/headerIcons';
import ProfileIcon from './ProfileIcon';

const Header = () => {
  console.log(headerIcons);

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

  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='headerTopContentContainer'>
          <div>
            <TwitterLogo />
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
        <div className='headerAccountContainer'>
          <div className='headerAccount'>
            <ProfileIcon />
            <div className='headerAccountName'>JA55er</div>
            <div className='headerAccountOptionsIconContainer'>
              <div className='headerAccountOptionsIcon'>
                {headerIcons.accountSettings}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
