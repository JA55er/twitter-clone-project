import React from 'react';

const LoginButtons = ({ textColor, border, backgroundColor, content }) => {
  return (
    <button className='loginButtons' style={{ color: textColor, border: border, backgroundColor: backgroundColor }}>
      <span>{content}</span>
    </button>
  );
};

export default LoginButtons;
