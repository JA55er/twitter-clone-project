import React, { useEffect, useState } from 'react';
import socket from '../utils/websocket';
import { useDispatch, useSelector } from 'react-redux';
import { clearNewTweets, getNewTweets } from '../reducers/newTweetsSlice';
import { addNewTweets } from '../reducers/tweetListSlice';

const NewTweetsNumber = () => {
  const [newTweetsNumber, setNewTweetsNumber] = useState(0);

  const dispatch = useDispatch();

  const newTweets = useSelector((state) => state.newTweetsList.newTweets);

  console.log('new Tweets: ', newTweets);

  useEffect(() => {
    socket.on('new tweet', (tweet) => {
      dispatch(getNewTweets(tweet));
    });
    return () => {
      socket.off('new tweet');
    };
  }, []);

  useEffect(() => {
    setNewTweetsNumber(newTweets.length);
  }, [newTweets]);

  const onNewTweetsClick = () => {
    dispatch(addNewTweets(newTweets));
    dispatch(clearNewTweets());
  };

  if (newTweetsNumber) {
    return (
      <div className='newTweetContainer' onClick={onNewTweetsClick}>
        <span className='newTweetNumber'>Show {newTweetsNumber} posts</span>
      </div>
    );
  } else return <></>;
};

export default NewTweetsNumber;
