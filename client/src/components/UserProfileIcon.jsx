import { Link, redirect, useNavigate } from 'react-router-dom';

const UserProfileIcon = ({ icon, userId }) => {

  const navigate = useNavigate()
  const onIconClick = () => {
    navigate(`/profile/${userId}`);
  };

  return (
    <>
      <img className='accountIcon' src={icon} onClick={onIconClick}/>
    </>
  );
};

export default UserProfileIcon;
