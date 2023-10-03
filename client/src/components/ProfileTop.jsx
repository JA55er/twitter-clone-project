import React from 'react';
import headerIcons from '../utils/headerIcons';
import optionIcons from '../utils/optionIcons';

const ProfileTop = ({ user }) => {
  return (
    <div className='profileTopContainer'>
      <div className='profileCoverContainer'>
        <img
          src='https://fastly.picsum.photos/id/93/600/200.jpg?hmac=RVzFDpAfxzk_eb_vtowlnRVO6IHZE7lEt5GnTrdQJig'
          alt=''
          className='profileCoverImage'
        />
      </div>
      <div className='profileTopMainContainer'>
        <div className='profileTopMenuContainer'>
          <div className='profileTopMenuIconContainer'>
            <img
              className='profileTopIcon'
              src='https://fastly.picsum.photos/id/826/200/200.jpg?hmac=WlCuCjxEhXh_s4IkOpulPoB-LOoGjfZwP4GjNnkzTLA'
              alt=''
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
                    <span className='profileTopRightFollowButtonText'>Following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileNameContainer">
          <span className='profileNameText'>JA55er</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
