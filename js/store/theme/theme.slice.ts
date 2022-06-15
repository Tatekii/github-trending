import {createSlice} from '@reduxjs/toolkit';
import {ThemeState} from './theme.types';
import {setTheme} from './theme.action';

const THEME_INITIAL_STATE: ThemeState = {
  theme: 'light', // 默认亮色主题
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: THEME_INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setTheme, (state, action) => {
      if (setTheme.match(action)) {
        return {
          theme: action.payload,
        };
      }
    });
  },
});
