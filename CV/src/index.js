import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import MenuContainer from './MenuContainer'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MenuContainer />
  </React.StrictMode>,
  document.querySelector("#container")
);
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
reportWebVitals();
