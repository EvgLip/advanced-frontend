import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import buildCssLoaders from '../build/loaders/buildCssLoaders';

const config: StorybookConfig =
{
  "stories": [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) =>
  {
    // const srcPath = path.resolve(__dirname, "../../src");

    // config.resolve?.modules?.push(srcPath);
    // config.resolve?.extensions?.push('.tsx', '.ts');
    // config.resolve!.alias!['@*'] = `${srcPath}/*`;

    if (!config.resolve) config.resolve = {};

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    if (!config.module) config.module = {};

    config.module.rules = [
      ...(config.module.rules || []),
    ];
    config.module.rules.push(buildCssLoaders(true));

    return config;
  },
};

export default config;