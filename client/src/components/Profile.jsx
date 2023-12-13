import React, { useEffect, useState } from 'react';
import TweetsList from './TweetsList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileStickyTop from './ProfileStickyTop';
import getSingleUser from '../api/getSingleUser';
import getProfileTweets from '../api/getProfileTweets';

const Profile = () => {
  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = useState({});

  const [page, setPage] = useState(1);

  const [tweets, setTweets] = useState([]);

  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    const getProfile = async () => {
      const profile = await getSingleUser(id);
      setUserProfile(profile);
    };
    getProfile();
  }, [id]);

  ///

  const newTweets = useSelector((state) => state.newTweetsList.newTweets);

  const newProfileTweets = newTweets.filter((tweet) => tweet.user._id === id);

  ///unoptimized
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, newProfileTweets.length]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      window.removeEventListener('scroll', handleScroll);
      console.log('new tweets: ', newProfileTweets.length);
      const tweetsResponse = await getProfileTweets(
        id,
        page,
        newProfileTweets.length
      );
      setTweets((tweets) => [...tweets, ...tweetsResponse]);
      setPage(page + 1);
      console.log('tweetsResponse after scroll: ', tweetsResponse);
    }
  };

  useEffect(() => {
    const getInitialTweets = async () => {
      const tweetsResponse = await getProfileTweets(id, page);
      setPage(page + 1);
      setTweets(tweetsResponse);
      console.log('tweetsResponse initial: ', tweetsResponse);
    };
    getInitialTweets();
  }, []);

  // const tweetsList = useSelector((state) => state.tweetsList.tweets);

  // const filteredTweets = tweetsList.filter((tweet) => tweet?.user?._id === id);

  // console.log(filteredTweets);

  return (
    <div className='contentContainer'>
      <div className='homeTimelineContainer'>
        <ProfileStickyTop username={userProfile.username} />
        <ProfileTop userProfile={userProfile} />
        <TweetsList tweets={tweets} />
      </div>
      <div className='contentBottomBuffer'></div>
    </div>
  );
};

export default Profile;
