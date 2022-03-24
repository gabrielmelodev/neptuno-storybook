import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#09090A'
      },
      {
        name: 'light',
        value: '#ffffff'
      }
    ]
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: ['Docs', 'Data', 'Form', 'Feedback', 'Overlay', 'Typography'],
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
      <Story />
    </div>
  ),
];
