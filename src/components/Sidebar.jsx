import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarContent'>
        <SearchBar />
        <FollowRecommend />
      </div>
    </div>
  );
};

export default Sidebar;
