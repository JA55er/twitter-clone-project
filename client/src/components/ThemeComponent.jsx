import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import utilityIcons from '../utils/utilityIcons';
import { changeTheme } from '../reducers/themeSlice';

const ThemeComponent = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const onThemeClick = () => {
    dispatch(changeTheme());
  };

  const themeIcon =
    theme === 'light' ? utilityIcons.lightModeIcon : utilityIcons.darkModeIcon;

  return (
    <div className='themeIconContainer' onClick={onThemeClick}>
      <div className='themeIcon'>{themeIcon}</div>
    </div>
  );
};

export default ThemeComponent;
