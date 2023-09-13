import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
import TrendsBar from './TrendsBar';
import LoginArea from './LoginArea';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const loggedUser = sessionStorage.getItem('user');

  if (!loggedUser) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebarContent'>
          <Link to={'/login'}>
            <div className='loginButtonContainer'>
              <button className='loginButton'>Login</button>
            </div>
          </Link>
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
