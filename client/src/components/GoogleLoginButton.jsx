import React from 'react';
import utilityIcons from '../utils/utilityIcons';
import { useSelector } from 'react-redux';

const GoogleLoginButton = ({ content }) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeStyles = {
    light: {
      textColor: '#000',
      border: '#ccc solid 1px',
      backgroundColor: '#FFF',
    },
    dark: {
      textColor: '#FFF',
      border: 'rgb(56,68,77) solid 1px',
      backgroundColor: 'rgb(21, 32, 43)',
    },
  };

  const styles = themeStyles[theme] || themeStyles.light;

  return (
    <button className='loginButtons' style={styles}>
      <div className='googleIcon'>{utilityIcons.google}</div>
      <span>{content}</span>
    </button>
  );
};

export default GoogleLoginButton;
