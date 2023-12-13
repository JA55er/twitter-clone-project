import React from 'react';
import TweetOptionsButton from './TweetOptionsButton';

const TweetProfileName = ({ username, tweet, userId }) => {

  const userTag = username + userId.slice(0, 4)
  return (
    <>
      <div className='tweetProfileNameOptionsContainer'>
        <div className='tweetProfileNameContainer'>
          <div className='tweetProfileName'>{username}</div>
          <div className='tweetProfileNameTag'>
            @{userTag}
          </div>
        </div>
        <TweetOptionsButton tweet={tweet} />
      </div>
    </>
  );
};

export default TweetProfileName;
