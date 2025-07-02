/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // Modify webpack config to properly handle CSS
  webpackFinal: async (config) => {
    // Find the existing CSS rule
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    );

    if (cssRule) {
      // Ensure we're using the right loaders for CSS
      cssRule.use = [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            implementation: require('postcss'),
          },
        },
      ];
    }

    return config;
  },
};

export default config;