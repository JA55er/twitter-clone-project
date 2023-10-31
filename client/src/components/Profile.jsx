import React, { useEffect, useState } from 'react';
import TweetsList from './TweetsList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileStickyTop from './ProfileStickyTop';
import getSingleUser from '../api/getSingleUser';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getProfile = async () => {
      const profile = await getSingleUser(id);
      setUserProfile(profile);
    };
    getProfile();
  }, [id]);

  // console.log(userProfile);

  const tweetsList = useSelector((state) => state.tweetsList.tweets);

  const filteredTweets = tweetsList.filter((tweet) => tweet?.user?._id === id);

  console.log(filteredTweets);

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ProfileStickyTop />
        <ProfileTop userProfile={userProfile} />
        <TweetsList tweets={filteredTweets} />
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default Profile;
