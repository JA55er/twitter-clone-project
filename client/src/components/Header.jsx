// import icons from '../utils/icons';
import HeaderLink from './HeaderLink';
import TwitterLogo from './TwitterLogo';
import headerIcons from '../utils/headerIcons';
import HeaderAccountMenu from './HeaderAccountMenu';
import BASE_URL from '../utils/baseUrl';
import { useMediaQuery } from 'react-responsive';
import utilityIcons from '../utils/utilityIcons';

// const Header = () => {
//   let headerLinks = [
//     {
//       label: 'Home',
//       icon: headerIcons.home,
//       link: '',
//     },
//     {
//       label: 'Explore',
//       icon: headerIcons.explore,
//       link: '',
//     },
//     {
//       label: 'Notifications',
//       icon: headerIcons.notifications,
//       link: '',
//     },
//     {
//       label: 'Messages',
//       icon: headerIcons.messages,
//       link: '',
//     },
//     {
//       label: 'Lists',
//       icon: headerIcons.lists,
//       link: '',
//     },
//     {
//       label: 'Bookmarks',
//       icon: headerIcons.bookmarks,
//       link: '',
//     },
//     {
//       label: 'Communities',
//       icon: headerIcons.communities,
//       link: '',
//     },
//     {
//       label: 'Verified',
//       icon: headerIcons.verified,
//       link: '',
//     },
//     {
//       label: 'Profile',
//       icon: headerIcons.profile,
//       link: '',
//     },
//     {
//       label: 'More',
//       icon: headerIcons.more,
//       link: '',
//     },
//   ];

//   const smallScreen = useMediaQuery({ maxWidth: 1300 });
//   const removeBooksmarks = useMediaQuery({ maxHeight: 750 });

//   if (removeBooksmarks) {
//     headerLinks = [
//       {
//         label: 'Home',
//         icon: headerIcons.home,
//         link: '',
//       },
//       {
//         label: 'Explore',
//         icon: headerIcons.explore,
//         link: '',
//       },
//       {
//         label: 'Notifications',
//         icon: headerIcons.notifications,
//         link: '',
//       },
//       {
//         label: 'Messages',
//         icon: headerIcons.messages,
//         link: '',
//       },
//       {
//         label: 'Lists',
//         icon: headerIcons.lists,
//         link: '',
//       },
//       {
//         label: 'Communities',
//         icon: headerIcons.communities,
//         link: '',
//       },
//       {
//         label: 'Verified',
//         icon: headerIcons.verified,
//         link: '',
//       },
//       {
//         label: 'Profile',
//         icon: headerIcons.profile,
//         link: '',
//       },
//       {
//         label: 'More',
//         icon: headerIcons.more,
//         link: '',
//       },
//     ];
//   }

//   const onTwitterLogoClick = () => {
//     if (
//       window.location.href === `http://localhost:5173/` ||
//       window.location.href === `https://twitter-6t.lm.r.appspot.com/`
//     ) {
//       window.scrollTo({ top: 0 });
//     }
//   };

//   return (
//     <div className='headerContainer'>
//       <div className='headerContent'>
//         <div className='headerTopContentContainer'>
//           <div className='logoHeaderContainer'>
//           {/* <div> */}
//             <div className='scrollTopTwitterLogo' onClick={onTwitterLogoClick}>
//               <TwitterLogo />
//             </div>
//             <div className='headerLinkListContainer'>
//               {headerLinks.map((link) => {
//                 return <HeaderLink link={link} key={link.label} />;
//               })}
//             </div>
//           </div>
//           <div className='headerWriteTweetButtonContainer'>
//             <div className='button'>
//               {smallScreen ? (
//                 <div className='writeTweetButtonIcon'>
//                   {utilityIcons.writeTweet}
//                 </div>
//               ) : (
//                 <span className='buttonLabel'>Tweet</span>
//               )}
//             </div>
//           </div>
//           {/* <div className='button'>
//             <span className='buttonLabel'>Tweet</span>
//           </div> */}
//         </div>
//         <HeaderAccountMenu smallScreen={smallScreen}/>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  let headerLinks = [
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

  const smallScreen = useMediaQuery({ maxWidth: 1300 });
  const removeBooksmarks = useMediaQuery({ maxHeight: 750 });

  if (removeBooksmarks) {
    headerLinks = [
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
  }

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
      <div id='headerContent' className='headerContent'>
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
          <div className='headerTweetButtonContainer'>
            <div className='headerTweetButton'>
              {smallScreen ? (
                <div className='writeTweetButtonIcon'>
                  {utilityIcons.writeTweet}
                </div>
              ) : (
                <span className='headerTweetButtonLabel'>Tweet</span>
              )}
            </div>
          </div>
        </div>
        <HeaderAccountMenu smallScreen={smallScreen} />
      </div>
    </div>
  );
};

//safe point without header account merged
// const Header = () => {
//   let headerLinks = [
//     {
//       label: 'Home',
//       icon: headerIcons.home,
//       link: '',
//     },
//     {
//       label: 'Explore',
//       icon: headerIcons.explore,
//       link: '',
//     },
//     {
//       label: 'Notifications',
//       icon: headerIcons.notifications,
//       link: '',
//     },
//     {
//       label: 'Messages',
//       icon: headerIcons.messages,
//       link: '',
//     },
//     {
//       label: 'Lists',
//       icon: headerIcons.lists,
//       link: '',
//     },
//     {
//       label: 'Bookmarks',
//       icon: headerIcons.bookmarks,
//       link: '',
//     },
//     {
//       label: 'Communities',
//       icon: headerIcons.communities,
//       link: '',
//     },
//     {
//       label: 'Verified',
//       icon: headerIcons.verified,
//       link: '',
//     },
//     {
//       label: 'Profile',
//       icon: headerIcons.profile,
//       link: '',
//     },
//     {
//       label: 'More',
//       icon: headerIcons.more,
//       link: '',
//     },
//   ];

//   const smallScreen = useMediaQuery({ maxWidth: 1300 });
//   const removeBooksmarks = useMediaQuery({ maxHeight: 750 });

//   if (removeBooksmarks) {
//     headerLinks = [
//       {
//         label: 'Home',
//         icon: headerIcons.home,
//         link: '',
//       },
//       {
//         label: 'Explore',
//         icon: headerIcons.explore,
//         link: '',
//       },
//       {
//         label: 'Notifications',
//         icon: headerIcons.notifications,
//         link: '',
//       },
//       {
//         label: 'Messages',
//         icon: headerIcons.messages,
//         link: '',
//       },
//       {
//         label: 'Lists',
//         icon: headerIcons.lists,
//         link: '',
//       },
//       {
//         label: 'Communities',
//         icon: headerIcons.communities,
//         link: '',
//       },
//       {
//         label: 'Verified',
//         icon: headerIcons.verified,
//         link: '',
//       },
//       {
//         label: 'Profile',
//         icon: headerIcons.profile,
//         link: '',
//       },
//       {
//         label: 'More',
//         icon: headerIcons.more,
//         link: '',
//       },
//     ];
//   }

//   const onTwitterLogoClick = () => {
//     if (
//       window.location.href === `http://localhost:5173/` ||
//       window.location.href === `https://twitter-6t.lm.r.appspot.com/`
//     ) {
//       window.scrollTo({ top: 0 });
//     }
//   };

//   return (
//     <div className='headerContainer'>
//       <div className='headerContent'>
//         <div className='headerTopContentContainer'>
//           <div>
//             <div className='scrollTopTwitterLogo' onClick={onTwitterLogoClick}>
//               <TwitterLogo />
//             </div>
//             <div className='headerLinkListContainer'>
//               {headerLinks.map((link) => {
//                 return <HeaderLink link={link} key={link.label} />;
//               })}
//             </div>
//           </div>
//           <div className='headerTweetButton'>
//             {smallScreen ? (
//               <div className='writeTweetButtonIcon'>
//                 {utilityIcons.writeTweet}
//               </div>
//             ) : (
//               <span className='headerTweetButtonLabel'>Tweet</span>
//             )}
//           </div>
//         </div>
//         <HeaderAccountMenu smallScreen={smallScreen}/>
//       </div>
//     </div>
//   );
// };

export default Header;
