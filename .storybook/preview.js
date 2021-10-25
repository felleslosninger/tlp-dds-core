export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    disabled: true,
  },
  actions: {
    disabled: true,
  },
  options: {
    storySort: {
      order: [
        'Introduksjon',
        'Designsystem',
        ['Tokens', 'Komponenter', 'Maler', ['Introduksjon']],
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
}
