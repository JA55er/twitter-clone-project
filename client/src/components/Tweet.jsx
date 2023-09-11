import TweetStats from './TweetStats';
import UserProfileIcon from './UserProfileIcon';
import TweetAttachment from './TweetAttachment';
import TweetText from './TweetText';
import TweetProfileName from './TweetProfileName';

const Tweet = ({ tweet }) => {
  const profileName = tweet.profileName;
  const text = tweet.text;
  const attachment = tweet.attachment;
  const stats = tweet.stats;
  const icon = tweet.user?.icon

  return (
    <div className='tweetContainer'>
      <div className='TweetProfileIconContainer'>
        <UserProfileIcon icon={icon}/>
      </div>
      <div className='tweetRightContainer'>
        <TweetProfileName profileName={profileName} />
        <TweetText text={text} />
        <TweetAttachment attachment={attachment} />
        <TweetStats stats={stats} />
      </div>
    </div>
  );
};

export default Tweet;
