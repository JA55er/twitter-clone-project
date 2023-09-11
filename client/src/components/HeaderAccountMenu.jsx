import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import headerIcons from '../utils/headerIcons';
import UserProfileIcon from './UserProfileIcon';

const HeaderAccountMenu = () => {
  const userFromContext = useContext(AppContext);

  const user = userFromContext?.user;
  const userIcon = user?.icon;

  if (!user) return

  return (
    <div className='headerAccountContainer'>
      <div className='headerAccount'>
        <UserProfileIcon icon={userIcon} />
        <div className='headerAccountName'>JA55er</div>
        <div className='headerAccountOptionsIconContainer'>
          <div className='headerAccountOptionsIcon'>
            {headerIcons.accountSettings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAccountMenu;
