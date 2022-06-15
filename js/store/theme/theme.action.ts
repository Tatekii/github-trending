import {createAction} from '@reduxjs/toolkit';
import {THEME_ACTION_TYPES, ThemeOptionValue} from './theme.types';

export const setTheme = createAction<ThemeOptionValue>(
  THEME_ACTION_TYPES.SET_THEME,
);
