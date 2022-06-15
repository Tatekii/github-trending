export enum THEME_ACTION_TYPES {
  SET_THEME = 'theme/SET_THEME',
}

export type ThemeOptionValue = 'light' | 'dark';

export type ThemeState = {
  theme: ThemeOptionValue;
};
