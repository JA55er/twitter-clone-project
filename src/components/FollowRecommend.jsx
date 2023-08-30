import React from 'react';
import RecommendedProfile from './RecommendedProfile';

const FollowRecommend = () => {

  const recommendedProfiles = [
    {
      profileIcon: '',
      profileName: 'JA55er',
    },
    {
      profileIcon: '',
      profileName: 'JA55er',
    },
    {
      profileIcon: '',
      profileName: 'JA55er',
    }
  ]
  
  return (
    <div className='followRecommendContainer'>
      <div className='followRecommendLabel'>Who to follow</div>
      <div className='followRecommendAccountsListContainer'>
        {recommendedProfiles.map(profile => {
          return <RecommendedProfile profile={profile}/>
        })}
      </div>
    </div>
  );
};

export default FollowRecommend;
