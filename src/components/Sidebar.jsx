import SearchBar from './SearchBar';
import FollowRecommend from './FollowRecommend';
import TrendsBar from './TrendsBar';
const Sidebar = () => {
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
