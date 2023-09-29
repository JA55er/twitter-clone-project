import TweetStats from './TweetStats';
import UserProfileIcon from './UserProfileIcon';
import TweetAttachment from './TweetAttachment';
import TweetText from './TweetText';
import TweetProfileName from './TweetProfileName';
import { Link } from 'react-router-dom';
import CommentStats from './CommentStats';

const Comment = ({ tweet }) => {
  const username = tweet.user?.username;
  const text = tweet.text;
  const attachment = tweet.attachment;
  const stats = tweet.stats;
  const icon = tweet.user?.icon;

  return (
    <>
      <Link to={`/tweet/${tweet._id}`}>
        <div className='tweetContainer'>
          <div className='TweetProfileIconContainer'>
            <UserProfileIcon icon={icon} />
          </div>
          <div className='tweetRightContainer'>
            <TweetProfileName username={username} />
            <TweetText text={text} />
            <TweetAttachment attachment={attachment} />
            <CommentStats stats={stats} tweet={tweet} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Comment;
