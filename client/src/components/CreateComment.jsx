import React, { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import UserProfileIcon from './UserProfileIcon';
import submitComment from '../api/submitComment';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../reducers/detailedTweetSlice';
import { userCreateTweetAction } from '../reducers/userSlice';

const CreateComment = ({ id }) => {
  const tweet = id;

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const token = user?.token;
  const userIcon = user?.icon;

  const [commentText, setCommentText] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      console.log('must be logged in to comment!');
      return;
    }
    try {
      const submittedComment = await submitComment({
        commentText,
        token,
        tweet,
      });
      dispatch(addComment(submittedComment));
      dispatch(userCreateTweetAction(submittedComment._id));
      setCommentText('');
      console.log(submittedComment);
    } catch (error) {
      console.log(error);
    }
  };

  const onCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const userIconContainer = userIcon ? (
    <UserProfileIcon icon={userIcon} />
  ) : (
    <div className='container' style={{ width: `40px` }}></div>
  );

  return (
    <div
      className='createTweetContainer'
      style={{ width: '100%', paddingBottom: '20px' }}
    >
      <div className='createTweetProfileIconContainer'>{userIconContainer}</div>
      <div
        className='createTweetRightContainer'
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'top',
        }}
      >
        <div className='writeTweetTextAreaContainer' style={{ width: '80%' }}>
          <TextareaAutosize
            className='writeTweetInput'
            placeholder='What is happening?!'
            rows={3}
            onChange={onCommentTextChange}
            value={commentText}
            spellCheck='false'
          />
        </div>
        <div
          className='writeTweetButtonContainer'
          style={{ alignItems: 'start' }}
        >
          <button
            className='writeTweetButton'
            type='submit'
            onClick={onFormSubmit}
          >
            <span className='writeTweetButtonSpan'>Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
