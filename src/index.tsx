import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { initReactI18next } from 'react-i18next';
import enJson from './locales/en.json';
import idJson from './locales/id.json';
import reportWebVitals from './reportWebVitals';
import App from './view/App';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    id: {
      translation: idJson,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
