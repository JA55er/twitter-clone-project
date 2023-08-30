import React from 'react';

import ProfileIcon from './ProfileIcon';

const RecommendedProfile = () => {
  return (
    <div className='followRecommendAccountContainer'>
    <div className='followRecommendAccountLeftSide'>
      <div className='followRecommendAccountIconContainer'>
        <ProfileIcon />
      </div>
      <div className='followRecommendAccountName'>Name</div>
    </div>
    <div className='followRecommendAccountRightSide'>
      <div className='followRecommendFollowButtonContainer'>
        <div className='followRecommendFollowButton'>Follow</div>
      </div>
    </div>
  </div>
  );
};

export default RecommendedProfile;