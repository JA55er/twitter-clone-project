import React from 'react';
import TweetOptionsButton from './TweetOptionsButton';
import { useNavigate } from 'react-router-dom';

const TweetProfileName = ({ username, tweet, userId }) => {
  const navigate = useNavigate();

  const onNameClick = (e) => {
    e.stopPropagation();
    navigate(`/profile/${userId}`);
  };

  const userTag = username + userId.slice(0, 4);
  // const userTag = username
  return (
    <>
      <div className='tweetProfileNameOptionsContainer'>
        <div className='tweetProfileNameContainer'>
          <div className='tweetProfileName' onClick={onNameClick}>
            {username}
          </div>
          <div className='tweetProfileNameTag' onClick={onNameClick}>
            @{userTag}
          </div>
        </div>
        <TweetOptionsButton tweet={tweet} />
      </div>
    </>
  );
};

export default TweetProfileName;
