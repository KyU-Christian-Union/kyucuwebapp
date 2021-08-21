/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@material-ui/core';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './redux/reduxStore';

const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    primary: {
      light: 'rgba(179, 67, 176, 1)',
      main: 'rgba(128, 0, 128, 1)',
      dark: 'rgba(79, 0, 83, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(167, 228, 153, 1)',
      main: 'rgba(51, 199, 34, 1)',
      dark: 'rgba(0, 108, 0, 1)',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    }
  },
  typography: {
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.3rem'
    },
    h6: {
      fontSize: '1rem'
    },
    button: {
      textTransform: 'none'
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
