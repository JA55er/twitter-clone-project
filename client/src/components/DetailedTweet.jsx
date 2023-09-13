import React, { useEffect, useState } from 'react';
import ContentTop from './ContentTop';
import { useParams } from 'react-router-dom';
import getSingleTweet from '../api/getSingleTweet';
import Tweet from './Tweet';

const DetailedTweet = () => {
  const { id } = useParams();

  const [tweet, setTweet] = useState();

  useEffect(() => {
    const getTweet = async () => {
      setTweet(await getSingleTweet(id));
      console.log(tweet);
    };
    getTweet();
  }, []);

  console.log(tweet);

  if (!tweet) {
    return (
      <div className='contentContainer'>
        <div className='homeTimelineContainer'>
          <ContentTop />
          <div className='contentBottomBuffer'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ContentTop />
        <Tweet tweet={tweet}/>
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default DetailedTweet;
