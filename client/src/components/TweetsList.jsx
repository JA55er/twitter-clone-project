import { useParams } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';

const TweetsList = () => {

  const { id } = useParams()

  console.log(id)

  const tweets = useSelector((state) => state.tweetsList.tweets);

  console.log('tweetList tweets array: ',tweets)

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} />;
      })}
    </div>
  );
};

export default TweetsList;
