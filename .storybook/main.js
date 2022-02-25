// .storybook/main.js

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-interactions'],
};