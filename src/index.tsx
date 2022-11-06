import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { store } from 'store';
import { GlobalStyle, theme } from 'styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
);

reportWebVitals();
