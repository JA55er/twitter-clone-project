const TweetAttachment = ({ attachment }) => {

  const onImageClick = (e) => {
    e.stopPropagation()
    console.log('image cliocked')
  }

  if (attachment) {
    return (
      <div className='tweetAttachmentContainer'>
        <div className='tweetMediaContainer'>
          <div className='tweetMediaTop'>
            <img className='tweetImage' src={attachment} onClick={onImageClick}/>
          </div>
          <div className='tweetMediaBottom'></div>
        </div>
      </div>
    );
  }
};

export default TweetAttachment;
