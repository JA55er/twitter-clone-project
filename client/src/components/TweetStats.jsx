import { useLocation, useParams } from 'react-router-dom';
import likeTweet from '../api/likeTweet';
import tweetStatsIcons from '../utils/tweetStatsIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  userDislikeTweetAction,
  userLikeTweetAction,
} from '../reducers/userSlice';
import { useState } from 'react';
import {
  dislikeCommentAction,
  dislikeTweetAction,
  likeCommentAction,
  likeTweetAction,
} from '../reducers/detailedTweetSlice';
import { likePostFromList } from '../reducers/tweetListSlice';

const TweetStats = ({ tweet }) => {
  const location = useLocation();

  const user = useSelector((state) => state.user.user);

  const detailedTweet = useSelector(
    (state) => state.detailedTweet.detailedTweet
  );

  const dispatch = useDispatch();

  const id = tweet?._id;
  const comments = tweet.stats.comments;
  const retweets = tweet.stats.retweets;
  const likes = tweet.stats.likes;
  const views = tweet.stats.views;

  const isLiked = user?.likes?.find((like) => like === id);

  // const sessionData = JSON.parse(sessionStorage.getItem('user'));

  const onLikeClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      console.log(user)
      try {
        likeTweet({ id, token: user.token });
        console.log('inside try');
        if (isLiked) {
          console.log('inside dislike');
          dispatch(userDislikeTweetAction(tweet._id));
          // sessionData.likes = sessionData.likes.filter((likedTweet) => {
          //   console.log('checked tweet id: ', tweet._id);
          //   console.log('tweet id: ', id);
          //   return likedTweet !== id;
          // });
          // console.log(sessionData);
          // sessionStorage.setItem('user', JSON.stringify(sessionData));
          console.log(id);
          console.log(detailedTweet._id);
          if (location.pathname === '/') {
            console.log('dispatching to list');
            dispatch(likePostFromList({ likes: likes - 1, id }));
          } else if (id === detailedTweet._id) {
            dispatch(likeTweetAction(likes - 1));
          } else {
            dispatch(likeCommentAction({ likes: likes - 1, id }));
          }
        } else {
          console.log('inside like');
          dispatch(userLikeTweetAction(tweet._id));
          // sessionData.likes = sessionData.likes.concat(id);
          // sessionStorage.setItem('user', JSON.stringify(sessionData));
          if (location.pathname === '/') {
            console.log('dispatching to list');
            dispatch(likePostFromList({ likes: likes + 1, id }));
          } else if (id === detailedTweet._id) {
            dispatch(likeTweetAction(likes + 1));
          } else {
            dispatch(likeCommentAction({ likes: likes + 1, id }));
          }
        }
      } catch (error) {
        console.log('couldnt like: ', error);
      }
    } else {
      console.log('no user')
    }
  };


  const likeElement = isLiked ? (
    <>
      <div className='tweetStatsIconContainer' onClick={onLikeClick}>
        <div className='tweetStatsIcon'>{tweetStatsIcons.liked}</div>
      </div>
      <span className='tweetStatsNumber' style={{ color: '#F44336' }}>
        {/* {likes} */}
        {likes}
      </span>
    </>
  ) : (
    <>
      <div className='tweetStatsIconContainer' onClick={onLikeClick}>
        <div className='tweetStatsIcon'>{tweetStatsIcons.notLiked}</div>
      </div>
      {/* <span className='tweetStatsNumber'>{likes}</span> */}
      <span className='tweetStatsNumber'>{likes}</span>
    </>
  );


  return (
    <div className='tweetStatsContainer'>
      <div className='tweetStats commentsStats'>
        <div className='tweetStatsIconContainer'>
          <div className='tweetStatsIcon'>{tweetStatsIcons.comments}</div>
        </div>
        <span className='tweetStatsNumber'>{comments}</span>
      </div>
      <div className='tweetStats retweetsStats'>
        <div className='tweetStatsIconContainer'>
          <div className='tweetStatsIcon'>{tweetStatsIcons.retweets}</div>
        </div>
        <span className='tweetStatsNumber'>{retweets}</span>
      </div>
      <div className='tweetStats likesStats'>
        {/* <div className='tweetStatsIconContainer' onClick={onLikeClick}>
          <div className='tweetStatsIcon'>{tweetStatsIcons.likes}</div>
        </div> */}
        {likeElement}
        {/* <span className='tweetStatsNumber'>{likes}</span> */}
      </div>
      <div className='tweetStats viewsStats'>
        <div className='tweetStatsIconContainer'>
          <div className='tweetStatsIcon'>{tweetStatsIcons.views}</div>
        </div>
        <span className='tweetStatsNumber'>{views}</span>
      </div>
    </div>
  );
};

export default TweetStats;
