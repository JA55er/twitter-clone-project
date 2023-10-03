import { Link, useNavigate, useParams } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';

const TweetsList = ({tweets}) => {
  const navigate = useNavigate();

  const onTweetClick = (id) => {
    console.log(id);
    navigate(`/tweet/${id}`);
  };

  // const tweets = useSelector((state) => state.tweetsList.tweets);

  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div
            className='tweetLinkHover'
            key={tweet._id}
            onClick={() => onTweetClick(tweet._id)}
          >
            <Tweet tweet={tweet} key={tweet._id} />
          </div>
        );
      })}
    </div>
  );
};

export default TweetsList;
