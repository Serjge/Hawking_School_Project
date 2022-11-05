import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyles';
import { theme } from 'styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </Provider>,
);

reportWebVitals();
