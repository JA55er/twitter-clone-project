import ContentTop from './ContentTop';
import CreateTweet from './CreateTweet';
import TweetsList from './TweetsList';

const Content = () => {
  console.log();

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ContentTop />
        <CreateTweet />
        <TweetsList />
      </div>
    </div>
  );
};

export default Content;
