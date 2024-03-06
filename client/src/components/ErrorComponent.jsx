import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className='contentContainer'>
      <div className='contentNotFoundContainer'>{errorMessage}</div>
    </div>
  );
};

export default ErrorComponent;
