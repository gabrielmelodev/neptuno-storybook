module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  typescript: {
    check: true,
    reactDocgen: false,
  },
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Roboto:wght@400;500;700&family=Spectral:wght@400;500;700&display=swap" rel="stylesheet">
    <style>html, body, #root { height: 100%; }</style>
  `,
};
