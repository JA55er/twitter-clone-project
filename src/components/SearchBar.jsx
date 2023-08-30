import React from 'react';
import headerIcons from '../utils/headerIcons'

const SearchBar = () => {
  return (
    <div className='searchBarContainer'>
      <div className='searchBar'>
        <div className='searchBarIconContainer'>
          <div className='searchBarIcon'>{headerIcons.explore}</div>
        </div>
        <div className='searchBarTextConainer'>
          <div className='searchBarText'>SearchBar</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
