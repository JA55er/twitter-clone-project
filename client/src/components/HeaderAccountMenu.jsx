import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import UserProfileIcon from './UserProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../reducers/userSlice';
import googleLogout from '../api/googleLogout';
import BASE_URL from '../utils/baseUrl';
import HeaderAccountIcon from './HeaderAccountIcon';

const HeaderAccountMenu = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const logOut = () => {
    dispatch(logoutUserAction());
    sessionStorage.clear();
    window.open(`${BASE_URL}/api/google/logout`, '_self');
  };

  const userIcon = user?.icon;

  // console.log(user);

  if (!user) return;

  const modal = !showModal ? null : (
    <>
      <div className='transparentOverlay' onClick={toggleModal}></div>
      <div className='accountModalContainer'>
        <div className='modalButton' onClick={logOut}>
          <span className='loggoutButtonText'>Log out {user.username}</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      {modal}
      <div className='headerAccountContainer'>
        <div className='headerAccount' onClick={toggleModal}>
          <HeaderAccountIcon icon={userIcon} />
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
