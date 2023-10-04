import React from 'react';
import utilityIcons from '../utils/utilityIcons';
import { Link } from 'react-router-dom';

const DetailedTop = () => {

  const onPostClick = () => {
    window.scrollTo({top: 0})
  }

  // fix: html naming

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
        <div className='homeButton' onClick={onPostClick}>
          <span className='homeSpan'>Post</span>
        </div>
      </div>
    </div>
  );
};

export default DetailedTop;
