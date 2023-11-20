import React from 'react';

const MenuModal = ({ showModal }) => {
  if (!showModal) return;

  return (
    <>
      <div className='transparentOverlay'></div>
      <div className='accountModalContainer'>
        <div className='modalButton'>
          <span className='loggoutButtonText'>Log out </span>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
