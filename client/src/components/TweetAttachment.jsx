import { useState } from 'react';

const TweetAttachment = ({ attachment }) => {
  const [showOverlay, setShowOverlay] = useState(null);

  const onImageClick = (e) => {
    e.stopPropagation();
    setShowOverlay(!showOverlay);
    console.log('image cliocked');
  };

  const onOverlayClick = (e) => {
    e.stopPropagation();
    setShowOverlay(!showOverlay);
  };

  const overlay = !showOverlay ? null : (
    <>
      <div className='darkOverlay' onClick={onOverlayClick}>
        <img className='overlayTweetImage' src={attachment} onClick={(e) => e.stopPropagation()}/>
      </div>
    </>
  );

  if (attachment) {
    return (
      <>
        {overlay}
        <div className='tweetAttachmentContainer'>
          <div className='tweetMediaContainer'>
            <div className='tweetMediaTop'>
              <img
                className='tweetImage'
                src={attachment}
                onClick={onImageClick}
              />
            </div>
            <div className='tweetMediaBottom'></div>
          </div>
        </div>{' '}
      </>
    );
  }
};

export default TweetAttachment;
