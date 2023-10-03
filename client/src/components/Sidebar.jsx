import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
import TrendsBar from './TrendsBar';
// import LoginArea from './LoginArea';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  // const user = useSelector((state) => state.user.user);

  const loggedUser = sessionStorage.getItem('token');

  if (!loggedUser) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebarContent'>
          <div className='loginButtonContainer'>
            <Link to={'/login'}>
              <button className='loginButton'>Login</button>
            </Link>
          </div>
          <SearchBar />
          <FollowRecommend />
          <TrendsBar />
        </div>
      </div>
    );
  } else
    return (
      <div className='sidebarContainer'>
        <div className='sidebarContent'>
          <SearchBar />
          <FollowRecommend />
          <TrendsBar />
        </div>
      </div>
    );
};

export default Sidebar;
