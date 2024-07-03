import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import './02/cra_fun_jsx/style.css'
import reportWebVitals from './reportWebVitals';
import Wrap from './02/cra_fun_jsx/Wrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <Wrap />
  // </React.StrictMode>
);

reportWebVitals();