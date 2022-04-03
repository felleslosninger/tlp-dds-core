const path = require('path')

module.exports = {
  stories: [
    '../docs-main/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/theming',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  staticDirs: ['../packages/icons/svg'],
  refs: {
    // Digdir Websites Components storybook integration
    websites: {
      title: 'Web komponenter',
      url: 'https://felleslosninger.github.io/tlp-storybook-websites/',
      expanded: false,
    },
    // ID-porten storybook integration
    idporten: {
      title: 'ID-porten komponenter',
      url: 'https://felleslosninger.github.io/idporten-design-system/',
      expanded: false,
    },
  },
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
  babel: async (options) => {
    return {
      ...options,
      presets: [...options.presets, '@babel/preset-react'],
    }
  },
}
