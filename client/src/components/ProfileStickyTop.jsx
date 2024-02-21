import React from 'react';
import utilityIcons from '../utils/utilityIcons';
import { Link } from 'react-router-dom';
import ThemeComponent from './ThemeComponent';

const ProfileStickyTop = ({ username }) => {
  const onNameClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className='contentTopContainer'>
      <div className='homeContainer'>
        <div className='profileArrowNameContainer'>
          <div className='backArrowContainer'>
            <Link to={'/'}>
              <div className='backArrowLogoContainer'>
                <div className='backArrow'>{utilityIcons.backArrow}</div>
              </div>
            </Link>
          </div>
          <div className='profileStickyTopNameContainer' onClick={onNameClick}>
            <span className='profileStickyTopNameText'>{username}</span>
          </div>
        </div>
        <ThemeComponent />
      </div>
    </div>
  );
};

export default ProfileStickyTop;
