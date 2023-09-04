import TextareaAutosize from 'react-textarea-autosize';

import TweetOptionsIcon from './TweetOptionsIcon';
import optionIcons from '../utils/optionIcons';
import UserProfileIcon from './UserProfileIcon';

const CreateTweet = () => {

  const optionIconsArr = [
    { icon: optionIcons.image },
    { icon: optionIcons.gif },
    { icon: optionIcons.poll },
    { icon: optionIcons.emoji },
    { icon: optionIcons.calendar },
    { icon: optionIcons.location },
  ];

  return (
    <div className='createTweetContainer'>
      <div className='createTweetProfileIconContainer'>
        <UserProfileIcon />
      </div>
      <div className='createTweetRightContainer'>
        <div className='writeTweetTextAreaContainer'>
          <TextareaAutosize
            className='writeTweetInput'
            placeholder='What is happening?!'
            rows={3}
          />
        </div>
        <div className='writeTweetOptionsContainer'>
          <div className='writeTweetOptionsLeftContainer'>
            {optionIconsArr.map((icon, i) => {
              return <TweetOptionsIcon icon={icon} key={i}/>;
            })}
          </div>
          <div className='writeTweetButtonContainer'>
            <div className='writeTweetButton'>
              <span className='writeTweetButtonSpan'>Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
