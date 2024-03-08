import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileListItem = ({ profile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();

  const onProfileClick = (id) => {
    console.log('onProfileClick');
    navigate(`/profile/${id}`);
  };

  const onImageLoad = () => {
    setImageLoaded(true);
  };

  console.log('profile: ', profile);

  return (
    <div
      className='profileListItemContainer'
      onClick={() => onProfileClick(profile._id)}
    >
      <div className='profileListItemIconContainer'>
        {!imageLoaded && <div className='accountIconimagePlaceholder'></div>}
        <img
          className='accountIcon'
          src={profile.icon}
          referrerPolicy='no-referrer'
          onLoad={onImageLoad}
        />
      </div>
      <div className='profileListItemRightContainer'>
        <div className='profileListItemName'>{profile.username}</div>
        <span className='profileListItemNickname'>
          @{profile.username + profile._id.substring(0, 4)}
        </span>
      </div>
    </div>
  );
};

export default ProfileListItem;
