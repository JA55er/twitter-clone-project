import React from 'react';
import TrendItem from './TrendItem';

const TrendsBar = () => {
  const trendingItems = [
    {
      rank: 1,
      tag: '#Nature',
      postsCount: 125,
    },
    {
      rank: 2,
      tag: '#Space',
      postsCount: 45,
    },
    {
      rank: 3,
      tag: '#Science',
      postsCount: 250,
      sticky: { position: 'sticky', top: '0' },
    },
    {
      rank: 4,
      tag: '#Culture',
      postsCount: 87,
      sticky: { position: 'sticky', top: '0' },
    },
  ];

  return (
    <div className='trendsBarContainer'>
      <div className='trendsBarLabelContainer'>
        <div className='trendsBarLabel'>Trends</div>
      </div>
      <div className='trendsListContainer'>
        <div className='trendsList'>
          {trendingItems.map((trendingItem, i) => {
            return <TrendItem trendingItem={trendingItem} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendsBar;
