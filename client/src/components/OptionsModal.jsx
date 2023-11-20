import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteTweet from '../api/deleteTweet';
import { removeTweetFromList } from '../reducers/tweetListSlice';

const OptionsModal = ({ onClose, position, tweet }) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const modalStyle = {
    top: position.top + 'px',
    right: position.right + 'px',
    // left: position.left + 'px',
  };

  const onModalClick = (e) => {
    e.stopPropagation();
  };

  const onDeleteClick = () => {
    console.log(tweet);
    console.log(user);
    deleteTweet({ id: tweet._id, token: user.user.token });
    dispatch(removeTweetFromList(tweet._id));
  };

  const deleteButton =
    tweet.user?._id === user.user?.id ? (
      <div className='modalButton' onClick={onDeleteClick}>
        <span className='loggoutButtonText'>Delete</span>
      </div>
    ) : null;

  return (
    <>
      <div className='optionsModal' style={modalStyle} onClick={onModalClick}>
        <div className='accountModalContainer'>
          {deleteButton}
          <div className='modalButton'>
            <span className='loggoutButtonText'>
              Follow {tweet.user.username}
            </span>
          </div>
        </div>
        <div className='tweetOptionsOverlay' onClick={onClose}></div>
      </div>
    </>
  );
};

export default OptionsModal;
