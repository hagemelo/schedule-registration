import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18n";
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';

const rootDiv = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
