// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [// Этот должно быть здесь в отдельном объекте, чтобы применяться глобально
  { ignores: ['dist', 'coverage'] }, {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  i18next.configs['flat/recommended'],
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended, {
    plugins: {
      'react-hooks': pluginHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...pluginHooks.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off", //Это правило требует использования синтаксис ES Module import вместо CommonJS require()
    },
  }, ...storybook.configs["flat/recommended"]];
