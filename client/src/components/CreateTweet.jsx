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
import uploadAttachment from '../api/uploadAttachment';

import imageCompression from 'browser-image-compression';
import Compressor from 'compressorjs';
import socket from '../utils/websocket';
import utilityIcons from '../utils/utilityIcons';
import { useMediaQuery } from 'react-responsive';

const CreateTweet = () => {
  const user = useSelector((state) => state.user.user);

  const theme = useSelector((state) => state.theme.theme);
  const token = user?.token;
  const userIcon = user?.icon;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userIconContainer = userIcon ? (
    <UserProfileIcon icon={userIcon} userId={user.id} />
  ) : (
    <div className='container' style={{ width: `40px` }}></div>
  );

  const [tweetText, setTweetText] = useState('');

  const [attachment, setAttachment] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  let optionIconsArr = [
    { icon: optionIcons.gif },
    { icon: optionIcons.poll },
    { icon: optionIcons.emoji },
    { icon: optionIcons.calendar },
    { icon: optionIcons.location },
  ];

  const removeOptions = useMediaQuery({ maxWidth: 720 });

  if (removeOptions) {
    optionIconsArr = [
      { icon: optionIcons.gif },
      { icon: optionIcons.emoji },
      { icon: optionIcons.location },
    ];
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      console.log('must be logged in to tweet!');
      return;
    }
    if (!tweetText && !attachment) {
      console.log('must input text or image to tweet!');
      return;
    }
    if (tweetText.length > 50) {
      console.log('cant use more than 50 letters per tweet');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', attachment);
      formData.append('tweetText', tweetText);
      formData.append('token', token);
      const newTweet = await submitTweet(formData);
      dispatch(addPosted(newTweet));
      dispatch(userCreateTweetAction(newTweet._id));
      console.log('tweet to be emitted: ', newTweet);
      socket.emit('new tweet', newTweet);
      setTweetText('');
      navigate(`/tweet/${newTweet._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const onImageButtonClick = () => {
    document.getElementById('writeTweetAttachmentInput').click();
  };

  const onImageInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(null);
    window.scrollTo({ top: 0 });
    console.log(`originalFile size ${file.size}`);
    console.log('file: ', file);
    new Compressor(file, {
      quality: 0.6,
      mimeType: 'image/jpeg',
      success: (compressedResult) => {
        setAttachment(compressedResult);
        console.log('compressed file: ', compressedResult);
      },
      error(err) {
        console.log(err.message);
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCrossClick = () => {
    setAttachment(null);
    setSelectedImage(null);
  };
  let postButtonColor;
  if (theme === 'light') {
    postButtonColor = {
      backgroundColor: tweetText || attachment ? '#1d9bf0' : '#8ecdf7',
    };
  } else {
    postButtonColor = {
      backgroundColor: tweetText || attachment ? '#1d9bf0' : 'rgb(25,94,141)',
    };
  }

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
          <div className='writeTweetAttachmentContainer'>
            {selectedImage && (
              <div className='tweetAttachmentContainer'>
                <div className='crossIconContainer' onClick={onCrossClick}>
                  <div className='crossIcon'>{utilityIcons.cross}</div>
                </div>
                <img
                  className='createTweetAttachmentImage'
                  src={selectedImage}
                  alt='selected image'
                  referrerPolicy='no-referrer'
                />
              </div>
            )}
          </div>
          <div className='writeTweetOptionsContainer'>
            <div className='writeTweetOptionsLeftContainer'>
              <div
                className='writeTweetOptionsIconContainer'
                onClick={onImageButtonClick}
              >
                <input
                  id='writeTweetAttachmentInput'
                  type='file'
                  accept='image/png, image/jpeg'
                  style={{ display: 'none' }}
                  onChange={onImageInputChange}
                  name='attachmentUpload'
                />
                <div className='tweetOptionsIcon'>{optionIcons.image}</div>
              </div>
              {optionIconsArr.map((icon, i) => {
                return <TweetOptionsIcon icon={icon} key={i} />;
              })}
            </div>
            <div className='writeTweetButtonContainer'>
              <button
                className='writeTweetButton'
                type='submit'
                style={postButtonColor}
              >
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
