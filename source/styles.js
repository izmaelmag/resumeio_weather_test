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
    font-family: 'Root', sans-serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 1;
  `,

  caption: css`
    font-family: 'RootMedium', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.43;
  `,

  label: css`
    font-family: 'Root', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
  `,

  text: css`
    font-family: 'Root', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  `,

  mark: css`
    font-family: 'RootBold', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  `
};

export const Animations = {
  fadeInTop: (t: number = 0.5, d: number = 0) => css`
    transform: translateY(-10px);
    opacity: 0;
    animation: fadeInTop ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeInBottom: (t: number = 0.5, d: number = 0) => css`
    transform: translateY(10px);
    opacity: 0;
    animation: fadeInBottom ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeOutBottom: (t: number = 0.5, d: number = 0) => css`
    transform: translateY(0px);
    opacity: 1;
    animation: fadeOutBottom ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeInRight: (t: number = 0.5, d: number = 0) => css`
    transform: translateX(-10px);
    opacity: 0;
    animation: fadeInRight ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  fadeIn: (t: number = 0.5, d: number = 0) => css`
    opacity: 0;
    animation: fadeIn ${t}s ${d}s ease;
    animation-fill-mode: forwards;
  `,

  spin: (clockwise: boolean = true, t: number = 0.5) => css`
    animation: ${clockwise ? 'spinClockwise' : 'spinAntiClockwise'} ${t}s linear infinite;
  `
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${Color.gray[200]};
    margin: 0;
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

  @keyframes fadeOutBottom {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }

    100% {
      opacity: 0;
      transform: translateY(10px);
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

  @keyframes spinClockwise {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinAntiClockwise {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;
