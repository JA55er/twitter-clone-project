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

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const logOut = () => {
    dispatch(logoutUserAction());
    sessionStorage.clear();
    window.open(`${BASE_URL}/api/google/logout`, '_self');
  };

  const userIcon = user?.icon;

  if (!user) return;

  const userTag = user.username + user.id.slice(0, 4);

  // const modal = !showModal ? null : (
  //   <>
  //     <div className='transparentOverlay' onClick={toggleModal}></div>
  //     <div className='accountModalContainer'>
  //       <div className='modalButton' onClick={logOut}>
  //         <span className='loggoutButtonText'>Log out {user.username}</span>
  //       </div>
  //     </div>
  //   </>
  // );

  const onHeaderClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      bottom: window.innerHeight - rect.top,
      left: rect.left + window.scrollX,
    });

    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* {modal} */}
      {modalVisible && (
        <HeaderAccountModal
          onClose={handleCloseModal}
          position={modalPosition}
          user={user}
        />
      )}
      <div className='headerAccountContainer'>
        <div className='headerAccount' onClick={onHeaderClick}>
          <HeaderAccountIcon icon={userIcon} />
          {smallScreen ? null : (
            <>
              <div className='headerAccountNameContainer'>
                <div className='headerAccountName'>{user.username}</div>
                <div className='headerAccountNameTag'>@{userTag}</div>
              </div>

              <div className='headerAccountOptionsIconContainer'>
                <div className='headerAccountOptionsIcon'>
                  {headerIcons.accountSettings}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderAccountMenu;

