const path = require('path')

module.exports = {
  stories: [
    '../.storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/theming',
  ],
}
