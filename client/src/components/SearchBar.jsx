import React, { useEffect, useState } from 'react';
import headerIcons from '../utils/headerIcons';
import getSearchProfiles from '../api/getSearchProfiles';
import ProfileSearchList from './ProfileSearchList';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const [profiles, setProfiles] = useState([]);

  const [searchBarFocused, setSearchBarFocused] = useState(false);

  const onTextChange = async (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const fetchedProfiles = await getSearchProfiles(searchText);
        setProfiles(fetchedProfiles);
        console.log(profiles);
      } catch (err) {
        console.log(err);
      }
    };
    if (searchText.length > 0) {
      getProfiles();
    }
  }, [searchText]);

  const onFocus = () => {
    setSearchBarFocused(true);
  };

  const onBlur = () => {
    setTimeout(() => {
      setSearchBarFocused(false);
    }, 100);
  };

  return (
    <>
      <div
        className={`searchBarContainer ${
          searchBarFocused ? 'focusedSearchBarContainer' : ''
        }`}
      >
        <div className='searchBar'>
          <div className='searchBarIconContainer'>
            <div
              className={`searchBarIcon  ${
                searchBarFocused ? 'focusedSearchBarIcon' : ''
              }`}
            >
              {headerIcons.explore}
            </div>
          </div>
          <div className='searchBarTextConainer'>
            <input
              onChange={onTextChange}
              onFocus={onFocus}
              onBlur={onBlur}
              type='text'
              className='searchBarText'
              spellCheck='false'
              placeholder='Search'
            ></input>
          </div>
        </div>
        {searchBarFocused && <ProfileSearchList profiles={profiles} />}
      </div>
    </>
  );
};

export default SearchBar;
