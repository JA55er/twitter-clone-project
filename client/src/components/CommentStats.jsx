import { useParams } from 'react-router-dom';
import likeTweet from '../api/likeTweet';
import tweetStatsIcons from '../utils/tweetStatsIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  userDislikeTweetAction,
  userLikeTweetAction,
} from '../reducers/userSlice';
import { useState } from 'react';
import {
  dislikeTweetAction,
  likeTweetAction,
} from '../reducers/detailedTweetSlice';

const CommentStats = ({ stats, tweet }) => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const id = tweet?._id;

  const comments = stats.comments;
  const retweets = stats.retweets;
  const likes = stats.likes;
  const views = stats.views;

  const isLiked = user?.likes?.find((like) => like === id);

  const data = JSON.parse(sessionStorage.getItem('user'));

  const [likesState, setLikesState] = useState(likes);

  // fix!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const onLikeClick = async (e) => {
    e.preventDefault();
    try {
      await likeTweet({ id, token: user.token });
      console.log('inside try');
      if (isLiked) {
        console.log('inside dislike');
        dispatch(userDislikeTweetAction(tweet._id));
        data.likes = user.likes;
        sessionStorage.setItem('user', JSON.stringify(data));
        setLikesState(likesState - 1);
        dispatch(dislikeTweetAction(likes - 1));
      } else {
        console.log('inside like');
        // console.log(tweet._id);
        dispatch(userLikeTweetAction(tweet._id));
        data.likes = user.likes;
        sessionStorage.setItem('user', JSON.stringify(data));
        setLikesState(likesState + 1);
        dispatch(likeTweetAction(likes + 1));
      }
    } catch (error) {
      console.log('couldnt like: ', error);
    }
  };

  console.log(tweet);

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

  // console.log(likesState)

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

export default CommentStats;
