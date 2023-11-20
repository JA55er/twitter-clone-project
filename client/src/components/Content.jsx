import ContentTop from './ContentTop';
import CreateTweet from './CreateTweet';
import TweetsList from './TweetsList';
import { useSelector } from 'react-redux';

const Content = () => {
  const tweets = useSelector((state) => state.tweetsList.tweets);

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ContentTop />
        <CreateTweet />
        <TweetsList tweets={tweets} />
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default Content;
