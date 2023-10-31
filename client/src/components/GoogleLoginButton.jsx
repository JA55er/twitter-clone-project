import React from 'react';
import utilityIcons from '../utils/utilityIcons';

const GoogleLoginButton = ({textColor, border, backgroundColor, content}) => {
  return (
    <button
      className='loginButtons'
      style={{
        color: textColor,
        border: border,
        backgroundColor: backgroundColor,
      }}
    >
      <div className='googleIcon'>{utilityIcons.google}</div>
      <span>{content}</span>
    </button>
  );
};

export default GoogleLoginButton;
