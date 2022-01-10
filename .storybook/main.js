const path = require('path');

module.exports = {
  stories: ['../.storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/theming', '@whitespace/storybook-addon-html', '@storybook/addon-a11y', 'storybook-addon-designs'],
  refs: {
    // ID-porten storybook integration
    idporten: {
      title: 'ID-porten',
      url: 'https://felleslosninger.github.io/idporten-design-system/',
      expanded: false
    }
  },
  core: {
    builder: "webpack5"
  }
};