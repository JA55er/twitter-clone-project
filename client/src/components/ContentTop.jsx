const ContentTop = () => {
  const onHomeClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className='contentTopContainer'>
      <div className='homeContainer' onClick={onHomeClick}>
        <div className='homeButton'>
          <span className='homeSpan'>Home</span>
        </div>
      </div>
      <div className='foryouFollowingContainer'>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>For you</span>
          <div className='foryouContainerActive'></div>
        </div>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Following</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
