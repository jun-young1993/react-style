module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:styled-components-a11y/recommended',
      'prettier', // Prettier와 충돌 방지
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'styled-components-a11y', 'import'],
    rules: {
      // 기본 규칙
      'react/react-in-jsx-scope': 'off', // React 17 이상에 필요 없음
      'react/prop-types': 'off', // PropTypes 사용 여부에 따라 설정
      'import/no-unresolved': 'error', // 잘못된 import 방지
  
      // Styled-components 관련 규칙
      'styled-components-a11y/no-autofocus': 'warn', // 자동 포커스 방지
      'styled-components-a11y/accessible-emoji': 'warn', // 접근성 있는 이모지 사용 권장
  
      // 기타 규칙
      'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
      'react/jsx-uses-vars': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동 감지
      },
    },
  };
  