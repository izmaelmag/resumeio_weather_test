import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

const LightTheme = {};

const RootContainer = document.getElementById('root');
const RootApp = (
  <ThemeProvider theme={LightTheme}>
    <h1>kmp</h1>
  </ThemeProvider>
);

ReactDOM.render(RootApp, RootContainer);
