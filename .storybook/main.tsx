import path from 'path'
import { merge } from 'webpack-merge'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-knobs',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    const rules = config.module.rules
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.resolve.plugins.push(new TsconfigPathsPlugin({}))

    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
        },
      },
    })
  },
}
