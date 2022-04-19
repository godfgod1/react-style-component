import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './Theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111"
}
const lightTheme = {
  textColor:"#111",
  backgroundColor:"whitesmoke"
}

root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={darkTheme}> */}
    <ThemeProvider theme={lightTheme}>
    {/* <App /> */}
    <Theme />
    </ThemeProvider>
  </React.StrictMode>
);