import React from 'react';
import utilityIcons from '../utils/utilityIcons';
import { Link } from 'react-router-dom';

const DetailedTop = () => {
  return (
    <div className='contentTopContainer'>
      <div className='homeContainer'>
        <Link to={'/'}>
          <div className='backArrowContainer'>
            <div className='backArrow'>{utilityIcons.backArrow}</div>
          </div>
        </Link>
        <div className='homeButton'>
          <span className='homeSpan'>Post</span>
        </div>
      </div>
    </div>
  );
};

export default DetailedTop;
