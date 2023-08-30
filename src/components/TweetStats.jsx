import tweetStatsIcons from "../utils/tweetStatsIcons"

const TweetStats = ({stats}) => {
  const comments = stats.comments
  const retweets = stats.retweets
  const likes = stats.likes
  const views = stats.views

  return (
    <div className='tweetStatsContainer'>
    <div className='tweetStats'>
      <div className='tweetStatsIconContainer'>
        <div className='tweetStatsIcon'>{tweetStatsIcons.comments}</div>
      </div>
      <span className='tweetStatsNumber'>{comments}</span>
    </div>
    <div className='tweetStats'>
      <div className='tweetStatsIconContainer'>
        <div className='tweetStatsIcon'>{tweetStatsIcons.retweets}</div>
      </div>
      <span className='tweetStatsNumber'>{retweets}</span>
    </div>
    <div className='tweetStats'>
      <div className='tweetStatsIconContainer'>
        <div className='tweetStatsIcon'>{tweetStatsIcons.likes}</div>
      </div>
      <span className='tweetStatsNumber'>{likes}</span>
    </div>
    <div className='tweetStats'>
      <div className='tweetStatsIconContainer'>
        <div className='tweetStatsIcon'>{tweetStatsIcons.views}</div>
      </div>
      <span className='tweetStatsNumber'>{views}</span>
    </div>
  </div>
  )
}

export default TweetStats