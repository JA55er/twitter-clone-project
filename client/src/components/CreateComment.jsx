import React, { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import UserProfileIcon from './UserProfileIcon';
import submitComment from '../api/submitComment';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../reducers/detailedTweetSlice';
import { userCreateTweetAction } from '../reducers/userSlice';
import optionIcons from '../utils/optionIcons';
import TweetOptionsIcon from './TweetOptionsIcon';
import Compressor from 'compressorjs';

const CreateComment = ({ id }) => {
  const tweet = id;

  const user = useSelector((state) => state.user.user);

  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();

  const token = user?.token;
  const userIcon = user?.icon;
  const userId = user?.id;

  const [commentText, setCommentText] = useState('');

  const [attachment, setAttachment] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const optionIconsArr = [
    { icon: optionIcons.gif },
    { icon: optionIcons.emoji },
    { icon: optionIcons.location },
  ];

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      console.log('must be logged in to comment!');
      return;
    }
    if (!commentText && !attachment) {
      console.log('must input text or image to comment!');
      return;
    }
    if (commentText.length > 50) {
      console.log('cant use more than 50 letters per comment');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', attachment);
      formData.append('commentText', commentText);
      formData.append('token', token);
      formData.append('tweet', tweet);
      const submittedComment = await submitComment(formData);
      // const submittedComment = await submitComment({
      //   commentText,
      //   token,
      //   tweet,
      // });
      dispatch(addComment(submittedComment));
      dispatch(userCreateTweetAction(submittedComment._id));
      setCommentText('');
      setAttachment(null);
      setSelectedImage(null);
      console.log(submittedComment);
    } catch (error) {
      console.log(error);
    }
  };

  const onCommentTextChange = (e) => {
    setCommentText(e.target.value);
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

  // console.log(userId);

  const userIconContainer = userIcon ? (
    <UserProfileIcon icon={userIcon} userId={userId} />
  ) : (
    <div className='container' style={{ width: `40px` }}></div>
  );

  let postButtonColor;
  if (theme === 'light') {
    postButtonColor = {
      backgroundColor: commentText || attachment ? '#1d9bf0' : '#8ecdf7',
    };
  } else {
    postButtonColor = {
      backgroundColor: commentText || attachment ? '#1d9bf0' : 'rgb(25,94,141)',
    };
  }

  // return (
  //   <div
  //     className='createTweetContainer'
  //     style={{ width: '100%', paddingBottom: '20px' }}
  //   >
  //     <div className='createTweetProfileIconContainer'>{userIconContainer}</div>
  //     <div
  //       className='createTweetRightContainer'
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         alignItems: 'top',
  //       }}
  //     >
  //       <div className='writeTweetTextAreaContainer' style={{ width: '80%' }}>
  //         <TextareaAutosize
  //           className='writeTweetInput'
  //           placeholder='What is happening?!'
  //           rows={3}
  //           onChange={onCommentTextChange}
  //           value={commentText}
  //           spellCheck='false'
  //         />
  //       </div>
  //       <div
  //         className='writeTweetButtonContainer'
  //         style={{ alignItems: 'start' }}
  //       >
  //         <button
  //           className='writeTweetButton'
  //           type='submit'
  //           onClick={onFormSubmit}
  //         >
  //           <span className='writeTweetButtonSpan'>Post</span>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div
      className='createTweetContainer'
      style={{ width: '100%', paddingBottom: '20px' }}
    >
      <div className='createTweetProfileIconContainer'>{userIconContainer}</div>
      <div
        className='createTweetRightContainer'
        style={{
          // flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'top',
        }}
      >
        <form action='submit' onSubmit={onFormSubmit}>
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
          <div className='writeTweetAttachmentContainer'>
            {selectedImage && (
              <img
                className='createTweetAttachmentImage'
                src={selectedImage}
                alt='selected image'
                referrerPolicy='no-referrer'
              />
            )}
          </div>
          <div className='writeCommentBottomContainer'>
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
            </div>
            <div
              className='writeTweetButtonContainer'
              style={{ alignItems: 'start' }}
            >
              <button
                className='writeTweetButton'
                type='submit'
                style={postButtonColor}
                // onClick={onFormSubmit}
              >
                <span className='writeTweetButtonSpan'>Reply</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComment;
