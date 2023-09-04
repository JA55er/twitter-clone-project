import React from 'react';

import OthersProfileIcon from './OthersProfileIcon';

const RecommendedProfile = ({profile}) => {

  const profileIcon = profile.profileIcon

  return (
    <div className='followRecommendAccountContainer'>
    <div className='followRecommendAccountLeftSide'>
      <div className='followRecommendAccountIconContainer'>
        <OthersProfileIcon profileIcon={profileIcon}/>
      </div>
      <div className='followRecommendAccountName'>{profile.profileName}</div>
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