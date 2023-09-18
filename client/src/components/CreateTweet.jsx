import { useContext, useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import TweetOptionsIcon from './TweetOptionsIcon';
import optionIcons from '../utils/optionIcons';
import UserProfileIcon from './UserProfileIcon';
import { AppContext } from '../App';
import submitTweet from '../api/submitTweet';

const CreateTweet = () => {
  const userFromContext = useContext(AppContext);
  const token = userFromContext?.user?.token;
  const userIcon = userFromContext?.user?.icon;

  const userIconContainer = userIcon ? (
    <UserProfileIcon icon={userIcon} />
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

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitTweet({ tweetText, token });
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
