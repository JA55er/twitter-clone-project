import React from 'react';
import TweetOptionsButton from './TweetOptionsButton';

const TweetProfileName = ({ username, tweet }) => {
 
  return (
    <>
      <div className='tweetProfileNameContainer'>
        <div className='tweetProfileName'>{username}</div>
        <TweetOptionsButton tweet={tweet}/>
      </div>
    </>
  );
};

export default TweetProfileName;
