import randomImage from '../assets/randomImage.jpg';

const TweetAttachment = ({attachment}) => {
  return (
    <div className='tweetAttachmentContainer'>
      <div className='tweetMediaContainer'>
        <div className='tweetMediaTop'>
          <img className='tweetImage' src={attachment} />
        </div>
        <div className='tweetMediaBottom'></div>
      </div>
    </div>
  );
};

export default TweetAttachment;
