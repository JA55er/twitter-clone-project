import React from 'react';
import ProfileListItem from './ProfileListItem';

const ProfileSearchList = ({ profiles }) => {
  return (
    <div className='profileListContainer'>
      {profiles.map((profile) => {
        return <ProfileListItem key={profile._id} profile={profile} />;
      })}
    </div>
  );
};

export default ProfileSearchList;
