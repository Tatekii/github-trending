module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|@react-native-community/*|react-navigation|react-navigation-stack|@react-navigation/.*)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
