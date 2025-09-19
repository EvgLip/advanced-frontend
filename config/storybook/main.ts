import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';
import { RuleSetRule } from 'webpack';

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
    "@chromatic-com/storybook"
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
    config.module.rules.push(buildCssLoader(true));


    //работа с svg
    config.module.rules = config.module.rules.map((rule) =>
    {
      if (rule && (rule !== "...") && /svg/.test(rule.test as string))
        return { ...rule, exclude: /\.svg$/i };
      return rule;
    });
    config.module.rules.push(buildSvgLoader());

    return config;
  },
};

export default config;