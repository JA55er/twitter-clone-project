import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import UserProfileIcon from './UserProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../reducers/userSlice';

const HeaderAccountMenu = () => {

  const user = useSelector(state => state.user.user)

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const logOut = () => {
    // userFromContext.setUser(null)
    dispatch(logoutUserAction())
    sessionStorage.clear()
  }

  const modal = !showModal ? null : (
    <>
      <div className='transparentOverlay' onClick={toggleModal}></div>
      <div className='accountModalContainer'>
        <div className="loggoutButton" onClick={logOut}>
          <span className='loggoutButtonText'>Log out JA55er</span>
        </div>
      </div>
    </>
  );

  // const user = userFromContext?.user;
  const userIcon = user?.icon;

  if (!user) return;

  return (
    <>
      {modal}
      <div className='headerAccountContainer'>
        <div className='headerAccount' onClick={toggleModal}>
          <UserProfileIcon icon={userIcon} />
          <div className='headerAccountName'>{user.username}</div>
          <div className='headerAccountOptionsIconContainer'>
            <div className='headerAccountOptionsIcon'>
              {headerIcons.accountSettings}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAccountMenu;
