import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import UserProfileIcon from './UserProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../reducers/userSlice';
import googleLogout from '../api/googleLogout';
import BASE_URL from '../utils/baseUrl';
import HeaderAccountIcon from './HeaderAccountIcon';
import OptionsModal from './OptionsModal';
import HeaderAccountModal from './HeaderAccountModal';

const HeaderAccountMenu = ({ smallScreen }) => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

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

  const headerContainer = document.getElementById('headerContent');
  console.log(headerContainer.scrollTop);

  const onHeaderClick = (e) => {
    e.stopPropagation();

    console.log('header clicked');
    const rect = e.currentTarget.getBoundingClientRect();
    console.log(rect);
    console.log(rect.top + document.getElementById('headerContent').scrollTop);
    // console.log(document.getElementById('headerContent').left)
    // const clickedElement = e.currentTarget;

    // Get the bounding box of the clicked element
    // const rect2 = clickedElement.getBoundingClientRect();
    // console.log(rect2)
    setModalPosition({
      bottom: window.innerHeight - rect.top,
      // window.innerHeight - rect.top  - headerContainer.scrollTop,
      // right: window.innerWidth - rect.right + headerContainer.scrollLeft,
      left: rect.left + window.scrollX,
    });

    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {modal}
      {modalVisible && (
        <HeaderAccountModal
          onClose={handleCloseModal}
          position={modalPosition}
          user={user}
        />
      )}
      <div className='headerAccountContainer'>
        <div className='headerAccount' onClick={onHeaderClick}>
          {/* <div className='headerAccount' onClick={toggleModal}> */}
          <HeaderAccountIcon icon={userIcon} />
          {smallScreen ? null : (
            <>
              <div className='headerAccountName'>{user.username}</div>
              <div className='headerAccountOptionsIconContainer'>
                <div className='headerAccountOptionsIcon'>
                  {headerIcons.accountSettings}
                </div>
              </div>
            </>
          )}
          {/* <div className='headerAccountName'>{user.username}</div>
          <div className='headerAccountOptionsIconContainer'>
            <div className='headerAccountOptionsIcon'>
              {headerIcons.accountSettings}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderAccountMenu;
