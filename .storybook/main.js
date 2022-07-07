const path = require('path')

module.exports = {
  stories: [
    '../docs-main/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/core/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/web/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/tokens/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/theming',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  staticDirs: ['../assets'],
  core: {
    builder: 'webpack5',
  },
  // Add rules to webpack config
  webpackFinal: async (config, { configType }) => {
    // Resolve raw import of SVG files as source code
    config.module.rules.push({
      test: /\.svg/,
      type: 'asset/source',
    })
    return config
  },
}
