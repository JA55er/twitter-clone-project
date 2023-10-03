import React from 'react';
import utilityIcons from '../utils/utilityIcons';
import { Link } from 'react-router-dom';

const ProfileStickyTop = () => {

  const onNameClick = () => {
    window.scrollTo({top: 0})
  }

  return (
    <div className='contentTopContainer'>
      <div className='homeContainer'>
        <div className='backArrowContainer'>
          <Link to={'/'}>
            <div className='backArrowLogoContainer'>
              <div className='backArrow'>{utilityIcons.backArrow}</div>
            </div>
          </Link>
        </div>
        <div className="profileStickyTopNameContainer" onClick={onNameClick}>
          <span className="profileStickyTopNameText">JA55er</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStickyTop;
