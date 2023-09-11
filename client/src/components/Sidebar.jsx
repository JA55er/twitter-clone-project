import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
import TrendsBar from './TrendsBar';
import LoginArea from './LoginArea';

const Sidebar = () => {
  const loggedUser = sessionStorage.getItem('user');

  if (!loggedUser) {
    return (
      <div className='sidebarContainer'>
        <LoginArea />
        <div className='sidebarContent'>
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
