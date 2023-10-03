import React from 'react';
import TweetsList from './TweetsList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileStickyTop from './ProfileStickyTop';

const Profile = () => {
  const { id } = useParams();

  console.log(id);

  const tweetsList = useSelector((state) => state.tweetsList.tweets);

  const filteredTweets = tweetsList.filter((tweet) => tweet.user._id === id);

  console.log(filteredTweets);

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ProfileStickyTop />
        <ProfileTop />
        <TweetsList tweets={filteredTweets} />
        <div className='contentBottomBuffer'></div>
      </div>
    </div>
  );
};

export default Profile;
