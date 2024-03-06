import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getSingleTweet from '../api/getSingleTweet';
import Tweet from './Tweet';
import DetailedTop from './DetailedTop';
import CreateComment from './CreateComment';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailedTweet } from '../reducers/detailedTweetSlice';
import ErrorComponent from './ErrorComponent';

const DetailedTweet = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const tweet = useSelector((state) => state.detailedTweet.detailedTweet);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getTweet = async () => {
      window.scrollTo({ top: 0 });
      try {
        const retrievedTweet = await getSingleTweet(id);
        console.log('retrieved tweet: ', retrievedTweet);
        dispatch(setDetailedTweet(retrievedTweet));
      } catch (err) {
        console.log(err);
        if (err.response.status === 404) {
          setErrorMessage(
            'Hmm...this page doesn’t exist. Try searching for something else.'
          );
        } else {
          setErrorMessage('Unexpected error occured.');
        }
      }
    };
    getTweet();
  }, [id]);

  const navigate = useNavigate();

  const onTweetClick = (id) => {
    console.log(id);
    navigate(`/tweet/${id}`);
  };

  if (errorMessage) {
    return <ErrorComponent errorMessage={errorMessage} />;
  }

  if (Object.keys(tweet).length === 0) {
    return (
      <div className='contentContainer'>
        <div className='homeTimelineContainer'>
          <DetailedTop />
        </div>
        <div className='contentBottomBuffer'></div>
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
      <div className='contentBottomBuffer'></div>
    </div>
  );
};

export default DetailedTweet;
