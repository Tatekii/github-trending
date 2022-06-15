import {combineReducers} from '@reduxjs/toolkit';
import {githubApi} from '../services/github';
import {themeSlice} from './theme/theme.slice';

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  [githubApi.reducerPath]: githubApi.reducer,
});
