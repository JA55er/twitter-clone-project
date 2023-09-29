import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSingleTweet from '../api/getSingleTweet';
import Tweet from './Tweet';
import DetailedTop from './DetailedTop';
import CreateComment from './CreateComment';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailedTweet } from '../reducers/detailedTweetSlice';
import Comment from './Comment';

const DetailedTweet = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const tweet = useSelector((state) => state.detailedTweet.detailedTweet);

  // const tweetsList = useSelector((state) => state.tweetsList.tweets);

  // const matchingTweet = tweetsList.find((tweet) => tweet._id === id);

  // console.log('tweet from list find: ', matchingTweet);

  // console.log('tweet from detailed: ', tweet);

  useEffect(() => {
    const getTweet = async () => {
      window.scrollTo({ top: 0 });
      const retrievedTweet = await getSingleTweet(id);
      // console.log('tweet from server: ', retrievedTweet)
      dispatch(setDetailedTweet(retrievedTweet));
      // dispatch(setDetailedTweet(tweet));
    };
    getTweet();
  }, [id]);

  console.log('detailed component')

  if (Object.keys(tweet).length === 0) {
    // if (!tweet) {
    return (
      <div className='contentContainer'>
        <div className='homeTimelineContainer'>
          <DetailedTop />
          <div className='contentBottomBuffer'></div>
        </div>
      </div>
    );
  }

  const comments = tweet.tweets;

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <DetailedTop />
        <Tweet tweet={tweet} />
        <CreateComment id={id} />
        {comments.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet._id} />;
        })}
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default DetailedTweet;
