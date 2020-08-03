const SEVERITY = 'error';
const DISABLED = 'off';


module.exports = {
  root: true,
  extends: ['@terminus/eslint-config-frontend'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: [
      // './tsconfig.json',
      // General tsconfig to collect files that don't belong to specific projects
      './tsconfig.tools.json',
      './libs/eslint-config-frontend/tsconfig.lib.json',
      './libs/*/tsconfig.lib.json',
      './libs/ui/*/tsconfig.lib.json',
      './apps/*/tsconfig.app.json',
      // Collect stand-alone specs into tsconfig project
      './specs/tsconfig.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  rules: {
    'jsdoc/require-jsdoc': SEVERITY,
    '@typescript-eslint/naming-convention': [
      SEVERITY,
      {
        selector: 'default',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
      },
    ],
  },
  overrides: [
    // TypeScript and Angular specific rules
    {
      files: [
        'libs/**/*.ts',
        'stories/**/*.ts',
      ],
      rules: {
        '@angular-eslint/component-selector': [
          SEVERITY,
          {
            type: 'element',
            prefix: ['ts'],
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          SEVERITY,
          {
            type: 'attribute',
            prefix: ['ts'],
            style: 'camelCase',
          },
        ],
        // For performance, prefer OnPush
        '@angular-eslint/prefer-on-push-component-change-detection': SEVERITY,
      },
    },

    // Design token files
    {
      files: [
        'libs/design-tokens/**/*.{ts,js}',
      ],
      rules: {
        '@typescript-eslint/no-magic-numbers': DISABLED,
      },
    },

    // Test helper files
    {
      files: [
        '**/*.spec.ts',
        '**/*.mock.ts',
        '**/test-*.ts',
      ],
      rules: {
        '@angular-eslint/prefer-on-push-component-change-detection': DISABLED,
        'import/no-unassigned-import': DISABLED,
      },
    },

    // Demo projects
    {
      files: [
        'apps/**/*.ts',
      ],
      rules: {
        '@angular-eslint/prefer-on-push-component-change-detection': DISABLED,
        '@typescript-eslint/explicit-member-accessibility': DISABLED,
        '@typescript-eslint/member-ordering': DISABLED,
        '@typescript-eslint/no-explicit-any': DISABLED,
        '@typescript-eslint/no-magic-numbers': DISABLED,
        '@typescript-eslint/no-non-null-assertion': DISABLED,
        'no-console': DISABLED,
        'jsdoc/require-jsdoc': DISABLED,
      },
    },

    // E2E Projects
    {
      files: [
        'apps/*-e2e/**/*.ts',
        'tools/**/*',
        'cypress/**/*',
      ],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
        'jest': true,
      },
      rules: {
        'import/no-unassigned-import': DISABLED,
      },
    },

    // Polyfill files
    {
      files: ['apps/**/polyfills.ts'],
      rules: {
        'import/no-unassigned-import': DISABLED,
        'line-comment-position': DISABLED,
      },
    },

  ],
};
