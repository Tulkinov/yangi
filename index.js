import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Table from './table.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Table/>
  </React.StrictMode>,
  document.getElementById('root')
);
