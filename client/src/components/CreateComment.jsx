import React, { useContext, useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import { AppContext } from '../App';

import UserProfileIcon from './UserProfileIcon';
import submitComment from '../api/submitComment';

const CreateComment = ({ id }) => {
  const tweet = id;

  const userFromContext = useContext(AppContext);
  const token = userFromContext?.user?.token;
  const userIcon = userFromContext?.user?.icon;

  const [commentText, setCommentText] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitComment({ commentText, token, tweet });
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
        <div
          className='writeTweetTextAreaContainer'
          style={{ paddingTop: '0px', width: '80%' }}
        >
          <TextareaAutosize
            className='writeTweetInput'
            placeholder='What is happening?!'
            rows={3}
            onChange={onCommentTextChange}
          />
        </div>
        <div
          className='writeTweetButtonContainer'
          style={{ margin: '0px', alignItems: 'start' }}
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
