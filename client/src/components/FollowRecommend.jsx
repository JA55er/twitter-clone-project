import React from 'react';
import RecommendedProfile from './RecommendedProfile';

import profileIcon1 from '../assets/profileIcon1.jpg'
import profileIcon2 from '../assets/profileIcon2.jpg'
import profileIcon3 from '../assets/profileIcon3.jpg'

const FollowRecommend = () => {

  const recommendedProfiles = [
    {
      profileIcon: profileIcon1,
      profileName: 'Aurora',
      profileNameTag: '@Aurora5960'
    },
    {
      profileIcon: profileIcon2,
      profileName: 'Gaia',
      profileNameTag: '@Gaia8609'
    },
    {
      profileIcon: profileIcon3,
      profileName: 'Fuji',
      profileNameTag: '@Fuji5486'
    }
  ]
  
  return (
    <div className='followRecommendContainer'>
      <div className='followRecommendLabel'>Who to follow</div>
      <div className='followRecommendAccountsListContainer'>
        {recommendedProfiles.map((profile, i) => {
          return <RecommendedProfile profile={profile} key={i}/>
        })}
      </div>
    </div>
  );
};

export default FollowRecommend;
