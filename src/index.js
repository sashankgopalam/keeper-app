// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep your own index.css if you have custom global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();