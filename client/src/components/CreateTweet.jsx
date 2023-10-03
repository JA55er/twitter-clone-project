import { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import TweetOptionsIcon from './TweetOptionsIcon';
import optionIcons from '../utils/optionIcons';
import UserProfileIcon from './UserProfileIcon';
import submitTweet from '../api/submitTweet';
import { useDispatch, useSelector } from 'react-redux';
import { addPosted } from '../reducers/tweetListSlice';
import { useNavigate } from 'react-router-dom';
import { userCreateTweetAction } from '../reducers/userSlice';

const CreateTweet = () => {
  const user = useSelector((state) => state.user.user);

  const token = user?.token;
  const userIcon = user?.icon;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userIconContainer = userIcon ? (
    <UserProfileIcon icon={userIcon} userId={user.id}/>
  ) : (
    <div className='container' style={{ width: `40px` }}></div>
  );

  const [tweetText, setTweetText] = useState('');

  const optionIconsArr = [
    { icon: optionIcons.image },
    { icon: optionIcons.gif },
    { icon: optionIcons.poll },
    { icon: optionIcons.emoji },
    { icon: optionIcons.calendar },
    { icon: optionIcons.location },
  ];

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTweet = await submitTweet({ tweetText, token });
      dispatch(addPosted(newTweet));
      dispatch(userCreateTweetAction(newTweet._id));
      setTweetText('');
      navigate(`/tweet/${newTweet._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  return (
    <div className='createTweetContainer'>
      <div className='createTweetProfileIconContainer'>{userIconContainer}</div>
      <div className='createTweetRightContainer'>
        <form action='submit' onSubmit={onFormSubmit}>
          <div className='writeTweetTextAreaContainer'>
            <TextareaAutosize
              className='writeTweetInput'
              placeholder='What is happening?!'
              rows={3}
              onChange={onTweetTextChange}
              value={tweetText}
              spellCheck='false'
            />
          </div>
          <div className='writeTweetOptionsContainer'>
            <div className='writeTweetOptionsLeftContainer'>
              {optionIconsArr.map((icon, i) => {
                return <TweetOptionsIcon icon={icon} key={i} />;
              })}
            </div>
            <div className='writeTweetButtonContainer'>
              <button className='writeTweetButton' type='submit'>
                <span className='writeTweetButtonSpan'>Post</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
