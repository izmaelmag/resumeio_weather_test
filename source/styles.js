import { css, createGlobalStyle } from 'styled-components';

export const Color = {
  shadow: 'rgba(28, 7, 19, 0.1)',
  white: '#ffffff',
  purple: '#730641',
  gray: {
    100: '#fafaf9',
    200: '#e4e0df',
    300: '#d6d2d1',
    400: '#8e8b8b',
    500: '#272525',
  },
};

export const Font = {
  title: css`
    font-family: 'Merriweather', serif;
    font-size: 36px;
    line-height: 1rem;
    font-weight: 400;
  `,

  subtitle: css`
    font-family: 'Merriweather', serif;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 400;
  `,

  display: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 48px;
    line-height: 1rem;
  `,

  caption: css`
    font-family: PT Root UI;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.43rem;
  `,

  label: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43rem;
  `,

  text: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43rem;
  `,

  mark: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43rem;
  `
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${Color.gray[200]};
  }

  @font-face {
    font-family: 'Merriweather';
    font-weigth: 400;
    font-style: normal;
    src: url('./fonts/Merriweather-Regular.ttf') format('truetype'),
         url('./fonts/Merriweather-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'PT Root UI';
    font-weigth: 700;
    font-style: normal;
    src: url('./fonts/PTRootUIBold.ttf') format('truetype'),
         url('./fonts/PTRootUIBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'PT Root UI';
    font-weigth: 500;
    font-style: normal;
    src: url('./fonts/PTRootUIMedium.ttf') format('truetype'),
         url('./fonts/PTRootUIMedium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'PT Root UI';
    font-weigth: 400;
    font-style: normal;
    src: url('./fonts/PTRootUIRegular.ttf') format('truetype'),
         url('./fonts/PTRootUIRegular.woff2') format('woff2');
  }
`
