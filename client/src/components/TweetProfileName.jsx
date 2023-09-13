import React from 'react';
import headerIcons from '../utils/headerIcons';

const TweetProfileName = ({username}) => {
  return (
    <div className='tweetProfileNameContainer'>
      <div className='tweetProfileName'>{username}</div>
      <div className='tweetUserOptionsIconContainer'>
        <div className='tweetUserOptionsIcon'>
          {headerIcons.accountSettings}
        </div>
      </div>
    </div>
  );
};

export default TweetProfileName;
