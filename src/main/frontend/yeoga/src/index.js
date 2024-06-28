import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as BR } from 'react-router-dom';
import { HelmetProvider as HP } from 'react-helmet-async';
import { GoogleOAuthProvider as GP } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GP clientId={process.env.REACT_APP_GOOGLE_LOGIN_TOKEN}>
    <BR>
      <HP>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HP>
    </BR>
  </GP>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
