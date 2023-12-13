import TweetStats from './TweetStats';
import UserProfileIcon from './UserProfileIcon';
import TweetAttachment from './TweetAttachment';
import TweetText from './TweetText';
import TweetProfileName from './TweetProfileName';
import { Link } from 'react-router-dom';

const Tweet = ({ tweet }) => {
  if (!tweet) return <></>;

  const username = tweet.user?.username;
  const text = tweet.text;
  const attachment = tweet.attachment;
  // const stats = tweet.stats;
  const icon = tweet.user?.icon;
  const userId = tweet.user?._id;


  const onProfileIconClick = (e) => {
    e.stopPropagation();
  };

  // console.log(tweet)

  return (
    <>
      <div className='tweetContainer'>
        <div className='TweetProfileIconContainer' onClick={onProfileIconClick}>
          <UserProfileIcon icon={icon} userId={userId} />
          {/* <UserProfileIcon icon={icon} userId={tweet?.user?._id} /> */}
        </div>
        <div className='tweetRightContainer'>
          <TweetProfileName username={username} tweet={tweet} userId={userId} />
          <TweetText text={text} />
          <TweetAttachment attachment={attachment} />
          <TweetStats tweet={tweet} />
        </div>
      </div>
    </>
  );
};

export default Tweet;
