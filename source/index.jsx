import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { GlobalStyle } from './styles';

const RootContainer = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>  
, RootContainer);
