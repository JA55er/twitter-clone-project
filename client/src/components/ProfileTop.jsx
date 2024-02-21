import React from 'react';
import headerIcons from '../utils/headerIcons';
import optionIcons from '../utils/optionIcons';
import utilityIcons from '../utils/utilityIcons';

const ProfileTop = ({ userProfile }) => {
  if (!userProfile.info) return;

  return (
    <div className='profileTopContainer'>
      <div className='profileCoverContainer'>
        <img
          src={userProfile.info.cover}
          alt=''
          className='profileCoverImage'
        />
      </div>
      <div className='profileTopMainContainer'>
        <div className='profileTopMenuContainer'>
          <div className='profileTopMenuIconContainer'>
            <img
              className='profileTopIcon'
              src={userProfile.icon}
              alt=''
              referrerPolicy='no-referrer'
            />
          </div>
          <div className='profileTopRightContainer'>
            <div className='profileTopRightButtonsContainer'>
              <div className='profileTopRightSettingsButtonContainer'>
                <div className='profileTopRightButtonCircle'>
                  <div className='profileTopRightSettingsButton'>
                    {headerIcons.accountSettings}
                  </div>
                </div>
              </div>
              <div className='profileTopRightRingButtonContainer'>
                <div className='profileTopRightButtonCircle'>
                  <div className='profileTopRightRingButton'>
                    {optionIcons.notify}
                  </div>
                </div>
              </div>
              <div className='profileTopRightFollowButtonContainer'>
                <div className='profileTopRightFollowButtonCircle'>
                  <div className='profileTopRightFollowButton'>
                    <span className='profileTopRightFollowButtonText'>
                      Following
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='profileNameContainer'>
          <span className='profileNameText'>{userProfile.username}</span>
        </div>
        <div className='profileBioContainer'>
          <div className='profileBioText'>{userProfile.info.bio}</div>
        </div>
        <div className='profileUserInfoContainer'>
          <div className='profileUserInfoItemContainer'>
            <div className='profileUserInfoItemIcon'>
              {utilityIcons.birthday}
            </div>
            <div className='profileUserInfoItemText'>Born March 31</div>
          </div>
          <div className='profileUserInfoItemContainer'>
            <div className='profileUserInfoItemIcon'>
              {utilityIcons.calendar}
            </div>
            <div className='profileUserInfoItemText'>Joined April 2019</div>
          </div>
        </div>
        <div className='profileUserFollowInfoContainer'>
          <div className='profileUserFollowContainer'>
            <span className='profileUserFollowNumber'>
              {userProfile.info.following}{' '}
            </span>
            <span className='profileUserFollowText'>Following</span>
          </div>
          <div className='profileUserFollowContainer'>
            <span className='profileUserFollowNumber'>
              {userProfile.info.followers}{' '}
            </span>
            <span className='profileUserFollowText'>Followers</span>
          </div>
        </div>
      </div>
      {/*fix: change css naming */}
      {/* <div className='contentTopContainer'> */}
      <div className='foryouFollowingContainer'>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Posts</span>
          <div className='foryouContainerActive'></div>
        </div>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Replies</span>
          <div></div>
        </div>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Media</span>
          <div></div>
        </div>
        <div className='foryouContainer'>
          <div></div>
          <span className='foryouSpan'>Likes</span>
          <div></div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProfileTop;
