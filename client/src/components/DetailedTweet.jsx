import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getSingleTweet from '../api/getSingleTweet';
import Tweet from './Tweet';
import DetailedTop from './DetailedTop';
import CreateComment from './CreateComment';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailedTweet } from '../reducers/detailedTweetSlice';

const DetailedTweet = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const tweet = useSelector((state) => state.detailedTweet.detailedTweet);

  useEffect(() => {
    const getTweet = async () => {
      window.scrollTo({ top: 0 });
      const retrievedTweet = await getSingleTweet(id);
      dispatch(setDetailedTweet(retrievedTweet));
    };
    getTweet();
  }, [id]);

  const navigate = useNavigate();

  const onTweetClick = (id) => {
    console.log(id);
    navigate(`/tweet/${id}`);
  };


  if (Object.keys(tweet).length === 0) {
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
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default DetailedTweet;
