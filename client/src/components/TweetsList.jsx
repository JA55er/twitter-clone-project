import { useState, useEffect, useContext } from 'react';

import Tweet from './Tweet';
import getTweets from '../api/getTweets'
import { AppContext } from '../App';

const TweetsList = () => {

  const appContext = useContext(AppContext)

  const tweets = appContext.tweets

  // const [tweets, setTweets] = useState([]);

  // useEffect(() => {
  //   const setFunc = async () => {
  //     setTweets(await getTweets());
  //   };
  //   setFunc();
  // }, []);

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id}/>;
      })}
    </div>
  );
};

export default TweetsList;
