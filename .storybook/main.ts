import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {},
  webpackFinal: async (config) => {
    // Add CSS loader for all CSS imports (fonts, icons, StoryUI panel)
    config.module?.rules?.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};

export default config;
