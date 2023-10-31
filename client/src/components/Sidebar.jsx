import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
import TrendsBar from './TrendsBar';
// import LoginArea from './LoginArea';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import googleLogin from '../api/googleLogin';
import GoogleLoginButton from './GoogleLoginButton';
import SidebarLogin from './SidebarLogin';

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);

  // const loggedUser = sessionStorage.getItem('token');


  if (user === null) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebarContent'>
          <SidebarLogin />
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
