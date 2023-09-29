import { useEffect } from 'react';
import ContentTop from './ContentTop';
import CreateTweet from './CreateTweet';
import TweetsList from './TweetsList';

const Content = () => {

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ContentTop />
        <CreateTweet />
        <TweetsList />
        <div className="contentBottomBuffer"></div>
      </div>
    </div>
  );
};

export default Content;
