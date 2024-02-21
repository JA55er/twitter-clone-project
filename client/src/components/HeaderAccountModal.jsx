import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteTweet from '../api/deleteTweet';
import { removeTweetFromList } from '../reducers/tweetListSlice';
import ReactDom from 'react-dom';
import { logoutUserAction } from '../reducers/userSlice';
import BASE_URL from '../utils/baseUrl';

const HeaderAccountModal = ({ onClose, position }) => {
  const user = useSelector((state) => state.user.user);
  const theme = useSelector((state) => state.theme.theme);

  console.log(user);

  const dispatch = useDispatch();

  let modalThemes = {
    light: {
      backgroundColor: '#FFF',
      color: '#000',
    },
    dark: {
      backgroundColor: 'rgb(21, 32, 43)',
      color: '#FFF',
    },
  };
  const modalThemeStyle = modalThemes[theme] || modalThemes.light;
  const modalStyle = {
    bottom: position.bottom + 'px',
    // top: position.top + 'px',
    // right: position.right + 'px',
    // backgroundColor: 'black'
    left: position.left + 'px',
  };

  const onModalClick = (e) => {
    e.stopPropagation();
    console.log(modalStyle);
  };

  const logOut = () => {
    dispatch(logoutUserAction());
    sessionStorage.clear();
    window.open(`${BASE_URL}/api/google/logout`, '_self');
  };

  console.log('styles: ',{ ...modalStyle, ...modalThemeStyle });

  return ReactDom.createPortal(
    <>
      {/* <div className='accountModal' onClick={onModalClick}> */}
      <div
        className='accountModal'
        style={{ ...modalStyle, ...modalThemeStyle }}
        onClick={onModalClick}
      >
        <div className='accountModalContainer'>
          <div className={`${theme}ModalButton modalButton`} onClick={logOut}>
            <div className='modalButtonTextContainer'>
              <span className='loggoutButtonText'>Log out {user.username}</span>
            </div>
          </div>
        </div>
        <div className='tweetOptionsOverlay' onClick={onClose}></div>
      </div>
    </>,
    document.getElementById('portal')
  );
  // return (
  //   <>
  //     {/* <div className='accountModal' onClick={onModalClick}> */}
  //     <div className='optionsModal' style={modalStyle} onClick={onModalClick}>
  //       <div className='accountModalContainer'>
  //         <div className='modalButton'>
  //           <span className='loggoutButtonText'>Delete</span>
  //         </div>
  //         <div className='modalButton'>
  //           <span className='loggoutButtonText'>Follow {user.username}</span>
  //         </div>
  //       </div>
  //       <div className='tweetOptionsOverlay' onClick={onClose}></div>
  //     </div>
  //   </>
  // );
};

export default HeaderAccountModal;
