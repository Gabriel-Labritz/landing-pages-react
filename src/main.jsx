import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import Home from './templates/Home/Home';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
