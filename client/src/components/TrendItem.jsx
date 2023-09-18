import React from 'react';

import headerIcons from '../utils/headerIcons';
const TrendItem = ({trendingItem}) => {

  return (
    <div className='trendItemContainer'>
      <div className='trendItem'>
        <div className='trendItemRankContainer'>
          <div className='trendItemRank'>{trendingItem.rank} · Trending Worldwide</div>
          <div className='trendItemOptionsContainer'>
            <div className='trendItemOptions'>
              {headerIcons.accountSettings}
            </div>
          </div>
        </div>
        <div className='trendItemTagContainer'>
          <div className='trendItemTag'>{trendingItem.tag}</div>
        </div>
        <div className='trendItemPostsCountContainer'>
          <div className='trendItemPostsCount'>{trendingItem.postsCount} posts</div>
        </div>
      </div>
    </div>
  );
};

export default TrendItem;
