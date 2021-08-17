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
    primary: {
      main: '#8C30F5',
      light: '#e7e9f8'
    },
    secondary: {
      main: '#FFFFFF'
    },
    red: {
      main: '#FF1744'
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
