import { Link, useNavigate, useParams } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';
import NewTweetsNumber from './NewTweetsNumber';

const TweetsList = ({ tweets }) => {

  // console.log(tweets)
  const navigate = useNavigate();

  const onTweetClick = (id) => {
    console.log(id);
    navigate(`/tweet/${id}`);
  };

  //
  tweets = tweets.filter(
    (obj, index) => tweets.findIndex((item) => item._id === obj._id) === index
  );
  //

  console.log(tweets)

  // const tweets = useSelector((state) => state.tweetsList.tweets);

  return (
    <div>
      <NewTweetsNumber />
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
