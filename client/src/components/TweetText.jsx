import React from 'react';

const TweetText = ({text}) => {
  return (
    <div className='tweetTextContainer'>
      <div className='tweetText'>{text}</div>
    </div>
  );
};

export default TweetText;
