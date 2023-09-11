import React from 'react';

const Modal = () => {
  return (
    <div className='modalContainer'>
      HELLO
      <div className='modal'>
        <div className='modalContent'>
          <div className='modalTop'>
            <div className='closeModalButton'></div>
            <div className='modalLogo'></div>
            <div className="modalTopRightSide"></div>
          </div>
          <div className='modalBottom'>
            <div className='modalTopTextContainer'></div>
            <div className='modalUsernameContaienr'></div>
            <div className='modalPasswordContainer'></div>
            <div className='modalButtonContainer'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
