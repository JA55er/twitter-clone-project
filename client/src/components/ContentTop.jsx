const ContentTop = () => {
  return (
    <div className='contentTopContainer'>
      <div className='homeContainer'>
        <div className='homeButton'>
          <span className='homeSpan'>Home</span>
        </div>
      </div>
      <div className='foryouFollowingContainer'>
        <div className='foryouContainer'>
          <span className='foryouSpan'>For you</span>
        </div>
        <div className='followingContainer'>
          <span className='followingSpan'>Following</span>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
