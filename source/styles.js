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
    line-height: 1;
    font-weight: 400;
  `,

  subtitle: css`
    font-family: 'Merriweather', serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
  `,

  display: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 48px;
    line-height: 1;
  `,

  caption: css`
    font-family: PT Root UI;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.43;
  `,

  label: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
  `,

  text: css`
    font-family: PT Root UI;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  `,

  mark: css`
    font-family: PT Root UI;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  `
};

export const Animations = {
  fadeInTop: (t = 0.5, d = 0) => css`
    transform: translateY(-10px);
    opacity: 0;
    animation: fadeInTop ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeInBottom: (t = 0.5, d = 0) => css`
    transform: translateY(10px);
    opacity: 0;
    animation: fadeInTop ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeInLeft: (t = 0.5, d = 0) => css`
    transform: translateY(-10px);
    opacity: 0;
    animation: fadeInTop ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeIn: (t = 0.5, d = 0) => css`
    opacity: 0;
    animation: fadeIn ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${Color.gray[200]};
    margin: 0;
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

  @keyframes fadeIn {
      0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
