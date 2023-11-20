import React, { useState } from 'react';
import headerIcons from '../utils/headerIcons';
import OptionsModal from './OptionsModal';

const TweetOptionsButton = ({tweet}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const onIconClick = (e) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    console.log(rect)
    setModalPosition({
      top: rect.top + window.scrollY + 17.325,
      right: window.innerWidth - rect.right - 9.375 + window.scrollX
      // left: rect.left + window.scrollX + 9.3725,
    });

    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <OptionsModal onClose={handleCloseModal} position={modalPosition} tweet={tweet}/>
      )}
      <div className='tweetUserOptionsIconContainer' onClick={onIconClick}>
        <div className='tweetUserOptionsIcon'>
          {headerIcons.accountSettings}
        </div>
      </div>
    </>
  );
};

export default TweetOptionsButton;
