import React, { useEffect, useState } from 'react';
// import ContentTop from './ContentTop';
import { useParams } from 'react-router-dom';
import getSingleTweet from '../api/getSingleTweet';
import Tweet from './Tweet';
import DetailedTop from './DetailedTop';
import CreateComment from './CreateComment';

const DetailedTweet = () => {
  const { id } = useParams();

  console.log(id)

  const [tweet, setTweet] = useState();

  useEffect(() => {
    const getTweet = async () => {
      window.scrollTo({ top: 0 });
      setTweet(await getSingleTweet(id));
    };
    getTweet();
  }, [id]);

  if (!tweet) {
    return (
      <div className='contentContainer'>
        <div className='homeTimelineContainer'>
          <DetailedTop />
          <div className='contentBottomBuffer'></div>
        </div>
      </div>
    );
  }
  //comment called tweet
  // const tweet = {
  //   user 
  // }

  const comments = tweet.tweets
  console.log(tweet)
  console.log(comments)

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <DetailedTop />
        <Tweet tweet={tweet} />
        <CreateComment id={id}/>
        {comments.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet._id}/>
        })}
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default DetailedTweet;
