const fs = require('fs');
const path = require('path');

module.exports = {
  stories: [
    '../packages/*/README.md',
    '../packages/*/docs/*.md',
    '../packages/*/docs/!(assets)**/*.md',
    '../docs/README.md',
    '../docs/**/*.md',
    '../README.md',
    '../demo/README.md',
    '../demo/docs/*.md',
    '../packages/helpers/README.md',
    '../packages/helpers/*/README.md',
  ],
  addons: [
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-backgrounds/register.js',
    'storybook-prebuilt/addon-links/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
  },
};
