import React from 'react';

const TweetText = ({text}) => {
  console.log(text)
  return (
    <div className='tweetTextContainer'>
      <div className='tweetText'>{text}</div>
    </div>
  );
};

export default TweetText;
